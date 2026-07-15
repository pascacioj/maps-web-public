import { motion } from 'motion/react';
import { ExternalLink, Youtube } from 'lucide-react';

export function MediaSection() {
  return (
    <section className="py-24 bg-editorial-bg-secondary border-b border-editorial-border relative overflow-hidden" id="multimedia">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-5xl italic text-editorial-text mb-4"
          >
            Descubre nuestro entorno
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-body text-sm sm:text-base text-editorial-muted"
          >
            Una mirada de cerca a los ecosistemas que trabajamos para proteger y conservar.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Video 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-4"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-editorial-bg border border-editorial-border shadow-2xl">
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/Y1t_JjseHV4?rel=0" 
                title="MAPS A.C. Video 1" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
              </iframe>
            </div>
            <div className="flex justify-center">
              <a 
                href="https://www.youtube.com/watch?v=Y1t_JjseHV4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-editorial-glass border border-editorial-border hover:border-editorial-accent hover:text-editorial-bg text-editorial-muted px-4 py-2 rounded-xl text-xs font-medium tracking-wide transition-all duration-300 group cursor-pointer"
              >
                <Youtube className="w-4 h-4 text-red-500 group-hover:text-current transition-colors" />
                <span>¿No se reproduce? Míralo en YouTube</span>
                <ExternalLink className="w-3 h-3 text-editorial-accent group-hover:text-current transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* Video 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col space-y-4"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-editorial-bg border border-editorial-border shadow-2xl">
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/GfqwReqErKA?rel=0" 
                title="MAPS A.C. Video 2" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
              </iframe>
            </div>
            <div className="flex justify-center">
              <a 
                href="https://www.youtube.com/watch?v=GfqwReqErKA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-editorial-glass border border-editorial-border hover:border-editorial-accent hover:text-editorial-bg text-editorial-muted px-4 py-2 rounded-xl text-xs font-medium tracking-wide transition-all duration-300 group cursor-pointer"
              >
                <Youtube className="w-4 h-4 text-red-500 group-hover:text-current transition-colors" />
                <span>¿No se reproduce? Míralo en YouTube</span>
                <ExternalLink className="w-3 h-3 text-editorial-accent group-hover:text-current transition-colors" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
