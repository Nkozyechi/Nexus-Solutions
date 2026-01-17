import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Quote } from 'lucide-react';
import { COMPANY_INFO, HOME_PILLARS, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      
      {/* Hero Section - The Hook */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2613&auto=format&fit=crop" 
            alt="Futuristic City Skyline" 
            className="w-full h-full object-cover opacity-20 grayscale-[20%] dark:grayscale-[50%] dark:opacity-30 transition-all duration-500"
          />
          {/* Gradient Overlay for text readability - Fading to primary */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/30"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-transparent to-primary/90"></div>
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 dark:opacity-20" 
             style={{ backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center mt-10">
          <div className="inline-block px-4 py-1.5 mb-6 border border-blue-100 dark:border-blue-900 rounded-full bg-blue-50/80 dark:bg-blue-900/30 backdrop-blur-md">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">Future-Ready Solutions</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-text-main tracking-tight mb-8 leading-tight drop-shadow-sm">
            Innovating the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Next Horizon</span>
          </h1>
          <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
            {COMPANY_INFO.description} We transform complex challenges into elegant, automated systems tailored for the modern Zambian enterprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-accent text-white rounded-lg font-bold hover:bg-accent-hover transition-all shadow-[0_4px_14px_0_rgba(59,130,246,0.39)] hover:shadow-[0_6px_20px_rgba(59,130,246,0.23)] hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              Start Your Project <ChevronRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/portfolio" 
              className="px-8 py-4 bg-primary text-text-main border border-border-color rounded-lg font-bold hover:bg-secondary transition-all flex items-center justify-center shadow-sm"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-24 bg-secondary border-y border-border-color relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-[0.05] dark:invert"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text-main mb-4">Our Core Pillars</h2>
            <p className="text-text-muted">The foundation of our technological excellence.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {HOME_PILLARS.map((service) => (
              <div key={service.id} className="bg-primary border border-border-color p-8 rounded-2xl hover:border-accent/30 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/5">
                <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-text-main mb-3">{service.title}</h3>
                <p className="text-text-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials - People Pictures */}
      <section className="py-24 bg-primary border-b border-border-color">
          <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-text-main mb-4">Trusted by Industry Leaders</h2>
                  <p className="text-text-muted">Hear from the people we've helped succeed.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                  {TESTIMONIALS.map(testimonial => (
                       <div key={testimonial.id} className="bg-secondary p-8 rounded-2xl border border-border-color shadow-sm relative hover:shadow-md transition-shadow">
                          <div className="flex items-center gap-4 mb-6">
                               <img 
                                 src={testimonial.imageUrl} 
                                 alt={testimonial.name} 
                                 className="w-14 h-14 rounded-full border-2 border-white dark:border-border-color shadow-md object-cover" 
                               />
                               <div>
                                  <h4 className="text-text-main font-bold text-sm">{testimonial.name}</h4>
                                  <p className="text-xs text-text-muted font-medium">{testimonial.role}</p>
                                  <p className="text-xs text-accent">{testimonial.company}</p>
                               </div>
                          </div>
                          <Quote className="w-8 h-8 text-accent/20 absolute top-6 right-6" />
                          <p className="text-text-muted italic text-sm leading-relaxed">"{testimonial.content}"</p>
                       </div>
                  ))}
              </div>
          </div>
      </section>

      {/* CTA Band */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-gradient-to-r from-white to-gray-50 dark:from-surface dark:to-secondary border border-border-color rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl shadow-gray-200/50 dark:shadow-black/50">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2"></div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-6 relative z-10">Ready to modernize your business?</h2>
            <p className="text-text-muted mb-8 max-w-xl mx-auto relative z-10">
              Join the forward-thinking companies powered by {COMPANY_INFO.name}.
            </p>
            <Link 
              to="/contact"
              className="inline-block px-10 py-4 bg-accent text-white rounded-lg font-bold hover:bg-accent-hover transition-colors relative z-10 shadow-lg shadow-blue-500/30"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;