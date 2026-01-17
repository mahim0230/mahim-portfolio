import React, { useState } from 'react';
import { Mail, MapPin, Check } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { CLASSES } from '../constants';

export const Contact: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    
    // Construct mailto link
    const body = `Identity: ${formData.name}\nSource: ${formData.email}\n\nTransmission Content:\n${formData.message}`;
    const mailto = `mailto:mahimmiazi56@gmail.com?subject=New Connection Request from ${formData.name}&body=${encodeURIComponent(body)}`;
    
    setTimeout(() => {
        window.location.href = mailto;
    }, 1200);
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div 
          ref={ref}
          className={`rounded-[4rem] p-12 lg:p-20 relative overflow-hidden ${CLASSES.glass} ${CLASSES.reveal} ${isVisible ? CLASSES.revealVisible : CLASSES.revealHidden}`}
        >
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-[var(--primary)] opacity-40 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className={`text-6xl font-black ${CLASSES.headingFont} mb-8 leading-tight text-[var(--text)]`}>
                Ready to <br />
                <span className="gradient-text">Evolve?</span>
              </h2>
              <p className="text-[var(--text-muted)] text-lg mb-12 max-w-md font-light leading-relaxed">
                Currently accepting select freelance partnerships and collaborative research projects. Let's build something that lasts.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-indigo-400 ${CLASSES.glass}`}>
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest opacity-50 font-bold text-[var(--text)]">Inquiry Pipeline</div>
                    <div className="font-bold text-[var(--text)]">mahimmiazi56@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-sky-400 ${CLASSES.glass}`}>
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest opacity-50 font-bold text-[var(--text)]">Node Location</div>
                    <div className="font-bold text-[var(--text)]">Earth, Digital Sector</div>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input 
                type="text" 
                placeholder="Full Name" 
                required 
                className={CLASSES.input}
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <input 
                type="email" 
                placeholder="Email Source" 
                required 
                className={CLASSES.input}
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <textarea 
                placeholder="Project Description..." 
                rows={4} 
                required 
                className={CLASSES.input}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
              <button 
                type="submit" 
                className={`${CLASSES.buttonPrimary} w-full py-6 rounded-[2rem] font-black tracking-[0.2em] text-sm uppercase shadow-2xl`}
              >
                Initialize Upload
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Overlay */}
      {showSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-2xl animate-[fadeIn_0.5s_ease-out]">
          <div className={`text-center p-16 rounded-[4rem] max-w-md mx-6 ${CLASSES.glass}`}>
            <div className="w-24 h-24 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(99,102,241,0.6)]">
              <Check className="text-white w-12 h-12" />
            </div>
            <h3 className={`text-3xl font-black ${CLASSES.headingFont} mb-4 uppercase text-[var(--text)]`}>Node Updated</h3>
            <p className="text-[var(--text-muted)] mb-10 leading-relaxed font-light">
              Transmission received. Our protocols are initializing a response sequence.
            </p>
            <button 
              onClick={() => setShowSuccess(false)} 
              className={`${CLASSES.buttonPrimary} w-full py-5 rounded-3xl font-black tracking-widest uppercase text-xs`}
            >
              Acknowledge
            </button>
          </div>
        </div>
      )}
    </section>
  );
};