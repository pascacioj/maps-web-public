import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function Hero() {
  const { isDark } = useTheme();

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden border-b border-editorial-border">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/galeria-4.jpg" 
          alt="Chiapas Nature" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-editorial-bg/80 via-editorial-bg/60 to-editorial-bg" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <img 
            src={isDark ? "/logo-white.png" : "/logo.png"} 
            alt="MAPS A.C. Logo" 
            className="h-24 sm:h-32 w-auto object-contain drop-shadow-xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-editorial-text mb-6 leading-[0.9] italic">
            Pasión por la <br className="hidden sm:block" />
            <span className="text-editorial-accent not-italic">
              Conservación
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <p className="font-body text-sm sm:text-base text-editorial-muted mb-10 leading-relaxed max-w-md mx-auto">
            Fomentando la convivencia del hombre con la naturaleza a través del desarrollo sustentable y el respeto al planeta.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a 
            href="#about"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-editorial-accent text-xs tracking-widest uppercase font-bold text-[#0A0D0B] bg-editorial-accent hover:bg-transparent hover:text-editorial-accent transition-colors"
          >
            Conoce nuestra misión
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
          <a 
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-editorial-border text-xs tracking-widest uppercase font-bold text-editorial-text hover:border-editorial-accent hover:text-editorial-accent transition-colors"
          >
            Ver Proyectos
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
      >
        <span className="text-editorial-muted text-[10px] mb-2 tracking-[0.2em] uppercase">Descubrir</span>
        <div className="w-[1px] h-12 bg-editorial-border overflow-hidden relative">
          <motion.div 
            animate={{ y: [0, 48] }} 
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 bg-editorial-accent absolute top-0"
          />
        </div>
      </motion.div>
    </section>
  );
}
