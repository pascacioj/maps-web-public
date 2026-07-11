import { motion } from 'motion/react';

export function MediaSection() {
  return (
    <section className="py-24 bg-[#121513] border-b border-editorial-border relative overflow-hidden" id="multimedia">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden aspect-video bg-[#121513] border border-white/10 shadow-2xl"
          >
            <iframe 
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/Y1t_JjseHV4?rel=0" 
              title="MAPS A.C. Video 1" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen>
            </iframe>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden aspect-video bg-[#121513] border border-white/10 shadow-2xl"
          >
            <iframe 
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/GfqwReqErKA?rel=0" 
              title="MAPS A.C. Video 2" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen>
            </iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
