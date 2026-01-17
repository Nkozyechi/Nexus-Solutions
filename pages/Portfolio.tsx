import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="relative py-32 border-b border-border-color overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1555421689-49263307f3dd?auto=format&fit=crop&w=2000&q=80" 
            alt="Coding Screen" 
            className="w-full h-full object-cover opacity-10 dark:opacity-30 dark:grayscale" 
          />
           <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-text-main mb-6">Our Work</h1>
          <p className="text-xl text-text-muted max-w-2xl">
            A showcase of precision engineering and creative problem solving. See what we've built.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="bg-primary rounded-2xl border border-border-color overflow-hidden hover:border-accent/40 transition-all duration-300 group hover:shadow-xl hover:shadow-blue-900/10">
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
              </div>
              <div className="p-8 relative">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-blue-50 dark:bg-blue-900/30 text-accent border border-blue-100 dark:border-blue-900">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-text-main mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-text-muted text-sm mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="flex gap-4 pt-6 border-t border-border-color">
                  <a href={project.liveLink} className="flex items-center gap-2 text-sm text-text-main hover:text-accent transition-colors font-bold">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                  <a href={project.repoLink} className="flex items-center gap-2 text-sm text-text-muted hover:text-text-main transition-colors">
                    <Github className="w-4 h-4" /> Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;