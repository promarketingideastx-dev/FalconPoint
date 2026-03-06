import { collection, doc, writeBatch } from 'firebase/firestore';
import { db } from '../firebase';

export async function seedDatabase(org_id) {
  try {
    const batch = writeBatch(db);
    
    // Seed Organization
    const orgRef = doc(db, 'organizations', org_id);
    batch.set(orgRef, {
      name: 'Falcon Point Demo',
      settings: {
        unit_price: 349.00 // Default unit price per project/measurement
      }
    });

    // Seed Projects (Leads) for CRM
    const projectsRef = collection(db, 'projects');
    
    const project1 = doc(projectsRef);
    batch.set(project1, {
      org_id: org_id,
      title: 'Logistics Center Roof',
      customer: 'Amazon',
      status: 'Captured', // 'Captured', 'Measured', 'Quoted', 'Won'
      area_sqft: 45000,
      value: 45000 * 4.25,
      date: '2026-10-12',
      address: '100 Main St, Dallas TX'
    });
    
    const project2 = doc(projectsRef);
    batch.set(project2, {
      org_id: org_id,
      title: 'Residential Block B',
      customer: 'Housing Corp',
      status: 'Measured',
      area_sqft: 12500,
      value: 12500 * 4.25,
      date: '2026-10-15',
      address: '42 Oak Ln, Austin TX'
    });

    const project3 = doc(projectsRef);
    batch.set(project3, {
      org_id: org_id,
      title: 'Solar Farm Phase 1',
      customer: 'Tesla Energy',
      status: 'Quoted',
      area_sqft: 200000,
      value: 4200000, // Make this equal $4.2M for Dashboard test
      date: '2026-10-18',
      address: '99 Future Blvd, Houston TX'
    });

    await batch.commit();
    console.log("Database seeded successfully!");
    alert("Database seeded successfully with initial multi-tenant test data!");
  } catch (error) {
    console.error("Error seeding:", error);
    alert("Error seeding: " + error.message);
  }
}
