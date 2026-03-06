import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import toast from 'react-hot-toast';

export default function InstantQuoteWidget() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  
  const [calculatedArea, setCalculatedArea] = useState(0);
  const [isMeasuring, setIsMeasuring] = useState(false);
  
  const STANDARD_RATE = 4.50; // $4.50 per sqft

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const proceedToMap = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.address) {
      toast.error('Please provide at least your name and address.');
      return;
    }
    setStep(2);
  };

  const simulateMeasurement = () => {
    setIsMeasuring(true);
    // Simulate an AI/API calculating the roof size
    setTimeout(() => {
      const randomArea = Math.floor(Math.random() * (3500 - 1500 + 1) + 1500);
      setCalculatedArea(randomArea);
      setIsMeasuring(false);
      setStep(3);
    }, 2500);
  };

  const submitLead = async () => {
    const finalPrice = calculatedArea * STANDARD_RATE;
    const loadingToast = toast.loading('Sending your request to our experts...');
    
    try {
      // Create a HOT LEAD in Firestore. 
      // Note: org_id is hardcoded here for the public demo. In a real multi-tenant app, 
      // the widget URL would include a tenant ID (e.g., /quote?org=org_falcon_01)
      await addDoc(collection(db, 'projects'), {
        title: `HOT LEAD: ${formData.address}`,
        customer: formData.name,
        email: formData.email,
        phone: formData.phone,
        value: finalPrice,
        areaSqFt: calculatedArea,
        status: 'Captured',
        org_id: 'org_falcon_01', 
        createdAt: new Date().toISOString(),
        source: 'Auto-Quote Widget'
      });
      
      toast.success('Quote submitted successfully! We will contact you soon.', { id: loadingToast });
      setStep(4); // Success screen
    } catch (error) {
      console.error("Error creating hot lead:", error);
      toast.error('Something went wrong. Please try again.', { id: loadingToast });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-display text-slate-900 selection:bg-primary/20">
      {/* Simple Header */}
      <header className="bg-white px-6 py-4 shadow-sm border-b border-slate-200 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-1.5 rounded text-white flex items-center justify-center">
            <span className="material-symbols-outlined text-sm">home_work</span>
          </div>
          <h1 className="font-bold tracking-tight text-lg">Instant Roof Quote</h1>
        </div>
        <button onClick={() => navigate('/login')} className="text-sm font-semibold text-slate-500 hover:text-primary transition-colors">
          Contractor Login
        </button>
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-xl rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
          
          {/* Progress Bar */}
          <div className="flex bg-slate-50 border-b border-slate-100">
            <div className={`flex-1 py-3 text-center text-xs font-bold uppercase tracking-wider ${step === 1 ? 'text-primary border-b-2 border-primary' : 'text-slate-400'}`}>1. Details</div>
            <div className={`flex-1 py-3 text-center text-xs font-bold uppercase tracking-wider ${step === 2 ? 'text-primary border-b-2 border-primary' : 'text-slate-400'}`}>2. Map</div>
            <div className={`flex-1 py-3 text-center text-xs font-bold uppercase tracking-wider ${step === 3 ? 'text-primary border-b-2 border-primary' : 'text-slate-400'}`}>3. Quote</div>
          </div>

          <div className="p-8">
            {/* STEP 1: Form */}
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-left">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-black text-slate-800 tracking-tight">Get your estimate in 60 seconds.</h2>
                  <p className="text-slate-500 mt-2 text-sm">No credit card required. Enter your address to start.</p>
                </div>
                
                <form onSubmit={proceedToMap} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Property Address</label>
                    <input 
                      required
                      type="text" 
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="123 Main St, Springfield, IL 62701" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Full Name</label>
                      <input 
                        required
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(555) 000-0000" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    />
                  </div>
                  
                  <button type="submit" className="w-full mt-6 bg-primary hover:bg-emerald-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2">
                    <span>Next: Locate Property</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </form>
              </div>
            )}

            {/* STEP 2: Map Simulation */}
            {step === 2 && (
              <div className="animate-in fade-in zoom-in-95 duration-500">
                <div className="text-center mb-6">
                  <h2 className="text-xl font-bold text-slate-800">Confirm Your Roof</h2>
                  <p className="text-slate-500 text-sm mt-1">{formData.address}</p>
                </div>
                
                <div className="relative w-full h-64 bg-slate-200 rounded-xl overflow-hidden border-2 border-slate-100 shadow-inner group">
                  {/* Fake Satellite Map Background */}
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDD2N8AJOzO2hz1DmzCxOdcMbw3z7HMmKETtTU3rVRsc1I-0NmIkt3Qp_0NXGrxmIU8ML6tGudrrnaDCFKncAPaidbhbqqHC-bB79saFGl3lOWxkXfw-loT3IMwdUNZ20z6o76fkKgmpd5penmFGMgNLDdQMZ1Bdv1uNmV_HRPovKQc-YZXPfQuest924dQzaK5to4hR9tUe9xfSugnb35HuSi8J8XXLqQ3LJkCzxeSxUZf6UlPYmtKZd0qOxPZLOb1PSR45YbPfwY')" }}></div>
                  
                  {/* Scanning Overlay */}
                  {isMeasuring && (
                    <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center text-white">
                      <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mb-4 shadow-lg"></div>
                      <p className="font-bold tracking-widest uppercase text-sm drop-shadow-md animate-pulse">Scanning Blueprint...</p>
                    </div>
                  )}

                  {/* Crosshair Target */}
                  {!isMeasuring && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none opacity-50">
                      <span className="material-symbols-outlined text-6xl text-white drop-shadow-lg">center_focus_strong</span>
                    </div>
                  )}
                </div>

                <div className="flex gap-4 mt-8">
                  <button onClick={() => setStep(1)} className="px-6 py-3 rounded-xl border border-slate-200 text-slate-500 font-bold hover:bg-slate-50 transition-colors">
                    Back
                  </button>
                  <button 
                    onClick={simulateMeasurement} 
                    disabled={isMeasuring}
                    className="flex-1 bg-slate-900 hover:bg-black text-white font-bold py-3 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <span className="material-symbols-outlined text-sm">satellite_alt</span>
                    <span>{isMeasuring ? 'Analyzing...' : 'Auto-Measure Roof'}</span>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Quote & Hot Lead */}
            {step === 3 && (
              <div className="animate-in fade-in slide-in-from-right-8 duration-500 text-center">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner border border-emerald-50">
                  <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                </div>
                
                <h2 className="text-xl font-bold text-slate-500 mb-2">Estimated Measurement</h2>
                <div className="flex justify-center items-end gap-2 mb-8">
                  <span className="text-5xl font-black text-slate-900">{calculatedArea.toLocaleString()}</span>
                  <span className="text-lg font-bold text-slate-400 mb-1">Sq Ft</span>
                </div>

                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-lg">Hot Deal</div>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Your Instant Estimate</p>
                  <p className="text-4xl font-black text-primary">${(calculatedArea * STANDARD_RATE).toLocaleString()}</p>
                  <p className="text-xs text-slate-400 mt-2">*Based on standard composite shingle installation.</p>
                </div>

                <button onClick={submitLead} className="w-full bg-primary hover:bg-emerald-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2 text-lg">
                  <span>Send to Contractor</span>
                  <span className="material-symbols-outlined">send</span>
                </button>
                <button onClick={() => setStep(2)} className="mt-4 text-xs font-bold text-slate-400 hover:text-slate-600 uppercase tracking-wider">
                  Recalculate Area
                </button>
              </div>
            )}
            
            {/* STEP 4: Success */}
            {step === 4 && (
              <div className="animate-in zoom-in duration-500 text-center py-8">
                <span className="material-symbols-outlined text-6xl text-primary mb-4 block" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <h2 className="text-2xl font-black text-slate-900 mb-2">Request Received!</h2>
                <p className="text-slate-500">Your local experts have been notified and will contact you at <strong>{formData.phone || formData.email}</strong> shortly.</p>
              </div>
            )}
            
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="py-6 text-center text-xs font-bold text-slate-400 uppercase tracking-widest">
        Powered by Falcon Point Telemetry
      </footer>
    </div>
  );
}
