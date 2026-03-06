import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from '../firebase';

/**
 * Uploads a file to Firebase Storage and optionally links it to a project.
 * @param {File} file - The file to upload.
 * @param {string} projectId - The ID of the project to link the file to.
 * @param {function} onProgress - Callback for upload progress.
 * @returns {Promise<string>} - The download URL of the uploaded file.
 */
export const uploadProjectAsset = async (file, projectId, onProgress) => {
  if (!file || !projectId) throw new Error('File and Project ID are required.');
  
  // DEMO MODE BYPASS
  if (import.meta.env.VITE_FIREBASE_API_KEY?.includes('placeholder') || !import.meta.env.VITE_FIREBASE_API_KEY) {
    return new Promise((resolve) => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 20;
        if (onProgress) onProgress(progress);
        if (progress >= 100) {
          clearInterval(interval);
          resolve('https://demo.url/fake-asset-url.pdf');
        }
      }, 300);
    });
  }

  const fileExtension = file.name.split('.').pop();
  const safeFilename = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExtension}`;
  
  // Storage path: projects/{projectId}/assets/{fileName}
  const storageRef = ref(storage, `projects/${projectId}/assets/${safeFilename}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        if (onProgress) onProgress(progress);
      },
      (error) => {
        console.error('Upload failed:', error);
        reject(error);
      },
      async () => {
        try {
          // Upload completed successfully, get URL
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          
          // Link the file URL to the Firestore Project document
          const projectRef = doc(db, 'projects', projectId);
          await updateDoc(projectRef, {
            assets: arrayUnion({
              name: file.name,
              url: downloadURL,
              type: file.type,
              uploadedAt: new Date().toISOString()
            })
          });
          
          resolve(downloadURL);
        } catch (error) {
          reject(error);
        }
      }
    );
  });
};
