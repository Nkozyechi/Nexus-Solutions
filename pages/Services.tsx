import React from 'react';
import { SERVICES, PROCESS_STEPS } from '../constants';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="flex flex-col">
       <div className="relative py-32 border-b border-border-color overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80" 
            alt="Technology Background" 
            className="w-full h-full object-cover opacity-10 dark:opacity-30 dark:grayscale" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/60"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-text-main mb-6">What We Build</h1>
          <p className="text-xl text-text-muted max-w-2xl leading-relaxed">
            Engineering excellence tailored for scalability, security, and performance. We deliver mission-critical software.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="flex flex-col bg-primary border border-border-color rounded-2xl p-8 hover:border-accent/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/5">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center text-accent mb-6">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-text-main mb-3">{service.title}</h3>
              <p className="text-text-muted mb-8 flex-grow leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-4 mb-8">
                {service.features?.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-text-muted text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link 
                to="/contact" 
                className="w-full py-3 text-center border border-border-color text-text-muted hover:text-text-main font-medium rounded-lg hover:bg-secondary transition-colors flex items-center justify-center gap-2 group"
              >
                Inquire <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <section className="bg-secondary py-24 border-y border-border-color relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] dark:invert dark:opacity-[0.05]"></div>
        <div className="container mx-auto px-6 relative z-10">
           <h2 className="text-3xl font-bold text-text-main mb-16 text-center">Our Development Lifecycle</h2>
           <div className="grid md:grid-cols-4 gap-8 relative">
             <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-surface -z-10"></div>
             {PROCESS_STEPS.map((s, i) => (
               <div key={i} className="relative bg-secondary pt-4 md:pt-0 group">
                 <div className="w-16 h-16 bg-primary border border-border-color rounded-full flex items-center justify-center text-accent font-bold text-xl mb-6 shadow-md mx-auto md:mx-0 relative z-10 group-hover:scale-110 group-hover:border-accent group-hover:text-white group-hover:bg-accent transition-all duration-300">
                    {s.step}
                 </div>
                 <h3 className="text-xl font-bold text-text-main mb-2 text-center md:text-left">{s.title}</h3>
                 <p className="text-text-muted text-sm text-center md:text-left">{s.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default Services;