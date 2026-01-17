import React from 'react';
import { COMPANY_INFO, TECH_STACK, TEAM } from '../constants';
import { Target, Lightbulb, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="relative py-32 border-b border-border-color overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80" 
            alt="Team Collaboration" 
            className="w-full h-full object-cover opacity-10 dark:opacity-30 dark:grayscale" 
          />
           <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-text-main mb-6">Who We Are</h1>
          <p className="text-xl text-text-muted max-w-2xl">
            Zambia's leading voice in futuristic technology and digital innovation. We are architects of the new digital economy.
          </p>
        </div>
      </div>

      {/* Vision & Mission */}
      <section className="py-24 bg-primary relative">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-block px-3 py-1 mb-4 border border-blue-100 dark:border-blue-900 rounded-full text-accent text-xs font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-900/20">Our DNA</div>
            <h2 className="text-3xl font-bold text-text-main mb-6">The Vision</h2>
            <p className="text-text-muted text-lg leading-relaxed mb-6">
              To drive the technological renaissance of Africa by building systems that are not just efficient, but visionary. We believe in a future where Zambian businesses compete on the global stage through superior digital infrastructure.
            </p>
            <p className="text-text-main text-lg leading-relaxed border-l-4 border-accent pl-6 italic font-medium">
              "At {COMPANY_INFO.name}, we don't just write code; we architect the future."
            </p>
          </div>
          <div className="bg-secondary/50 backdrop-blur-sm p-8 rounded-2xl border border-border-color shadow-xl">
             <h3 className="text-xl font-bold text-text-main mb-8 border-b border-border-color pb-4">Our Core Values</h3>
             <ul className="space-y-8">
               <li className="flex gap-4 group">
                 <div className="bg-primary p-3 rounded-lg text-text-muted group-hover:text-accent group-hover:bg-accent/10 transition-colors shadow-sm border border-border-color"><Zap className="w-6 h-6"/></div>
                 <div>
                   <h4 className="text-text-main font-bold group-hover:text-accent transition-colors">Efficiency</h4>
                   <p className="text-sm text-text-muted">Optimizing every line of code for peak performance.</p>
                 </div>
               </li>
               <li className="flex gap-4 group">
                 <div className="bg-primary p-3 rounded-lg text-text-muted group-hover:text-accent group-hover:bg-accent/10 transition-colors shadow-sm border border-border-color"><Target className="w-6 h-6"/></div>
                 <div>
                   <h4 className="text-text-main font-bold group-hover:text-accent transition-colors">Transparency</h4>
                   <p className="text-sm text-text-muted">Clear communication and open processes.</p>
                 </div>
               </li>
               <li className="flex gap-4 group">
                 <div className="bg-primary p-3 rounded-lg text-text-muted group-hover:text-accent group-hover:bg-accent/10 transition-colors shadow-sm border border-border-color"><Lightbulb className="w-6 h-6"/></div>
                 <div>
                   <h4 className="text-text-main font-bold group-hover:text-accent transition-colors">Innovation</h4>
                   <p className="text-sm text-text-muted">Always pushing the boundaries of what's possible.</p>
                 </div>
               </li>
             </ul>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-secondary border-t border-border-color">
          <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-text-main mb-4">Meet the Leadership</h2>
                  <p className="text-text-muted">The minds shaping our future.</p>
              </div>
              <div className="grid md:grid-cols-4 gap-8">
                  {TEAM.map(member => (
                      <div key={member.id} className="group text-center bg-primary p-6 rounded-2xl border border-border-color hover:border-accent/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                          <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-secondary group-hover:border-accent transition-colors duration-300">
                              <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300" />
                          </div>
                          <h3 className="text-xl font-bold text-text-main mb-1">{member.name}</h3>
                          <p className="text-accent text-xs font-bold mb-3 uppercase tracking-wider">{member.role}</p>
                          <p className="text-text-muted text-sm leading-relaxed">{member.bio}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-primary border-y border-border-color relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-2xl font-bold text-text-main mb-12">Our Technology Stack</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-80">
            {TECH_STACK.map((tech, i) => (
              <div key={i} className="flex flex-col items-center gap-3 group">
                <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center text-text-muted group-hover:text-accent group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 border border-border-color group-hover:border-accent/30">
                  <tech.icon className="w-8 h-8" />
                </div>
                <span className="text-sm font-medium text-text-muted group-hover:text-text-main transition-colors">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;