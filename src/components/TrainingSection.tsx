import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, ExternalLink, ArrowUpRight } from 'lucide-react';

export function TrainingSection() {
  return (
    <section id="training" className="relative py-32 border-b border-editorial-border transition-colors overflow-hidden">
      {/* Smooth Continuous Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/bg-training.jpg" 
          alt="Capacitaciones background" 
          className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
        />
        {/* Editorial color overlay with high contrast and readability */}
        <div className="absolute inset-0 bg-editorial-bg/80 transition-colors duration-300" />
        {/* Soft fading gradients to make it seamlessly continuous with preceding and succeeding sections */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-editorial-bg to-transparent pointer-events-none transition-colors duration-300" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-editorial-bg to-transparent pointer-events-none transition-colors duration-300" />
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-12 h-12 bg-editorial-glass border border-editorial-border rounded-full flex items-center justify-center mb-6 text-editorial-accent"
          >
            <BookOpen className="w-5 h-5" />
          </motion.div>
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] text-editorial-accent uppercase tracking-[0.25em] font-bold mb-3"
          >
            Formación y Conocimiento
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-display text-4xl sm:text-5xl italic text-editorial-text mb-6 leading-tight"
          >
            Capacitaciones
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "60px" }}
            viewport={{ once: true }}
            className="h-[1px] bg-editorial-accent"
          />
        </div>

        {/* Content Box */}
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="bg-editorial-glass backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-editorial-border/60 hover:border-editorial-accent/40 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Highlight Quote */}
              <h3 className="font-display text-2xl sm:text-3xl text-editorial-text mb-8 italic max-w-2xl leading-relaxed">
                "El planeta no solo necesita defensores; necesita mentes preparadas."
              </h3>
              
              {/* Description paragraphs */}
              <div className="space-y-6 text-sm sm:text-base text-editorial-text/90 leading-relaxed max-w-3xl mb-12 font-body">
                <p>
                  La buena voluntad inspira, pero el conocimiento estratégico transforma. En un mundo en constante cambio, proteger la biodiversidad y restaurar nuestros ecosistemas ya no depende solo de la intención, sino de las herramientas y la ciencia con la que actuamos. La formación es el puente entre la preocupación y el impacto real.
                </p>
                <p className="font-medium text-editorial-text border-t border-editorial-border/30 pt-6">
                  Ya seas estudiante, profesional o un ciudadano listo para marcar la diferencia: tu aprendizaje es la acción más duradera en favor de la Tierra.
                </p>
              </div>

              {/* Call To Action Button pointing to external training page */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://capacitacion.mapsmexico.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-editorial-accent text-editorial-bg hover:bg-editorial-text hover:text-editorial-bg transition-colors duration-300 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] shadow-lg shadow-editorial-accent/10 cursor-pointer"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Ir a capacitacion.mapsmexico.org</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
