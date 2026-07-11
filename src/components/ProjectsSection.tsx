import { motion } from 'motion/react';
import { mapsData } from '../data';
import { ExternalLink } from 'lucide-react';

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-editorial-bg border-b border-editorial-border transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl sm:text-5xl italic text-editorial-text mb-4"
            >
              Proyectos Destacados
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-body text-sm sm:text-base text-editorial-muted max-w-md"
            >
              Conoce el impacto de nuestras acciones en la conservación y protección del medio ambiente en Chiapas.
            </motion.p>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mapsData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-editorial-glass border border-white/10 flex flex-col hover:bg-editorial-forest transition-colors"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden border-b border-editorial-border">
                <img 
                  src={`/images/proyecto-${index + 1}.jpg`} 
                  onError={(e) => {
                    e.currentTarget.onerror = null; // Prevent infinite loop
                    e.currentTarget.src = project.image;
                  }}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-[#0A0D0B]/20" />
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 rounded-full text-[9px] font-bold tracking-widest uppercase bg-editorial-bg text-editorial-accent border border-editorial-accent/30 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="relative flex-1 p-8 bg-transparent transition-colors">
                <div className="flex flex-col mb-4">
                  <span className="text-[10px] text-editorial-accent font-bold mb-2">0{index + 1} // {project.period}</span>
                  <h3 className="font-display text-2xl text-editorial-text">
                    {project.title}
                  </h3>
                </div>
                <p className="font-body text-xs text-editorial-muted leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="mt-auto pt-4 border-t border-white/5 flex items-center text-[10px] uppercase tracking-widest text-editorial-accent font-bold group-hover:text-white transition-colors cursor-pointer">
                  <span>Ver detalles del proyecto</span>
                  <ExternalLink className="w-3 h-3 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
