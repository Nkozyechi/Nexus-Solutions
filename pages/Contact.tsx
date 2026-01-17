import React, { useState } from 'react';
import { COMPANY_INFO } from '../constants';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setSubmitted(true), 1000);
  };

  return (
    <div className="min-h-screen bg-primary pt-10 pb-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80" 
            alt="Global Connections" 
            className="w-full h-full object-cover opacity-10 dark:opacity-30 grayscale" 
          />
           <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 pt-10">
          <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-4">Start Your Project</h1>
          <p className="text-text-muted max-w-xl mx-auto text-lg">
            Ready to build the future? Reach out to our team in Lusaka for a consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-primary/80 backdrop-blur-md p-8 rounded-2xl border border-border-color hover:border-accent/30 transition-colors shadow-lg shadow-gray-200/50 dark:shadow-black/50">
               <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-accent mb-4 border border-blue-100 dark:border-blue-900">
                 <Phone className="w-6 h-6" />
               </div>
               <h3 className="text-lg font-bold text-text-main mb-1">Call Us</h3>
               <p className="text-text-muted font-mono">{COMPANY_INFO.phone}</p>
            </div>

            <div className="bg-primary/80 backdrop-blur-md p-8 rounded-2xl border border-border-color hover:border-accent/30 transition-colors shadow-lg shadow-gray-200/50 dark:shadow-black/50">
               <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-accent mb-4 border border-blue-100 dark:border-blue-900">
                 <Mail className="w-6 h-6" />
               </div>
               <h3 className="text-lg font-bold text-text-main mb-1">Email Us</h3>
               <p className="text-text-muted font-mono">{COMPANY_INFO.email}</p>
            </div>

            <div className="bg-primary/80 backdrop-blur-md p-8 rounded-2xl border border-border-color hover:border-accent/30 transition-colors shadow-lg shadow-gray-200/50 dark:shadow-black/50">
               <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-accent mb-4 border border-blue-100 dark:border-blue-900">
                 <MapPin className="w-6 h-6" />
               </div>
               <h3 className="text-lg font-bold text-text-main mb-1">Visit HQ</h3>
               <p className="text-text-muted">{COMPANY_INFO.address}</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-primary/80 backdrop-blur-md rounded-2xl border border-border-color p-8 md:p-12 shadow-xl shadow-gray-200/50 dark:shadow-black/50">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                   <div className="w-24 h-24 bg-green-50 dark:bg-green-900/20 text-green-500 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                     <Send className="w-10 h-10" />
                   </div>
                   <h2 className="text-3xl font-bold text-text-main mb-4">Message Sent</h2>
                   <p className="text-text-muted max-w-sm mx-auto">Thank you for reaching out. We will analyze your request and get back to you within 24 hours.</p>
                   <button 
                     onClick={() => setSubmitted(false)}
                     className="mt-10 px-8 py-3 rounded-lg border border-border-color text-text-muted hover:bg-secondary transition-colors"
                    >
                      Send another message
                   </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2 ml-1">Name</label>
                      <input 
                        required
                        type="text" 
                        className="w-full px-4 py-4 bg-secondary border border-border-color rounded-xl text-text-main focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder-gray-400 focus:bg-primary"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2 ml-1">Email</label>
                      <input 
                        required
                        type="email" 
                        className="w-full px-4 py-4 bg-secondary border border-border-color rounded-xl text-text-main focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder-gray-400 focus:bg-primary"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2 ml-1">Subject</label>
                    <input 
                      required
                      type="text" 
                      className="w-full px-4 py-4 bg-secondary border border-border-color rounded-xl text-text-main focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder-gray-400 focus:bg-primary"
                      placeholder="Project Inquiry"
                      value={formData.subject}
                      onChange={e => setFormData({...formData, subject: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2 ml-1">Message</label>
                    <textarea 
                      required
                      rows={6}
                      className="w-full px-4 py-4 bg-secondary border border-border-color rounded-xl text-text-main focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none placeholder-gray-400 focus:bg-primary"
                      placeholder="Tell us about your requirements..."
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-5 bg-accent text-white font-bold rounded-xl hover:bg-accent-hover transition-colors shadow-lg shadow-blue-500/20 text-lg tracking-wide"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;