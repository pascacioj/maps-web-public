import { motion } from 'motion/react';
import { Target, Eye, Leaf, HeartHandshake, TreePine, Users, Lightbulb, Sprout, Heart, ShieldCheck } from 'lucide-react';
import { mapsData } from '../data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-editorial-bg border-b border-editorial-border transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-display text-4xl sm:text-5xl italic text-editorial-text mb-6"
          >
            Nuestro Propósito
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "60px" }}
            viewport={{ once: true }}
            className="h-[1px] bg-editorial-accent mx-auto"
          />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          {/* Mision Card */}
          <motion.div 
            variants={itemVariants}
            className="bg-editorial-glass rounded-2xl p-8 transition-all duration-300 border border-white/10 group relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-6 text-editorial-accent">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl text-editorial-text mb-4 italic">Misión</h3>
              <p className="font-body text-xs text-editorial-muted leading-relaxed">
                {mapsData.about.mision}
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div 
            variants={itemVariants}
            className="bg-editorial-glass rounded-2xl p-8 transition-all duration-300 border border-white/10 group relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-6 text-editorial-accent">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl text-editorial-text mb-4 italic">Visión</h3>
              <p className="font-body text-xs text-editorial-muted leading-relaxed">
                {mapsData.about.vision}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Objeto Section */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="font-display text-2xl sm:text-3xl text-editorial-text mb-4 italic">Objeto</h3>
            <p className="font-body text-sm text-editorial-muted leading-relaxed max-w-2xl mx-auto">
              {mapsData.about.objeto.intro}
            </p>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {mapsData.about.objeto.pilares.map((pilar, index) => {
              const icons = [TreePine, Users, Lightbulb];
              const Icon = icons[index];
              return (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="bg-editorial-glass rounded-2xl p-8 transition-all duration-300 border border-white/10"
                >
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-6 text-editorial-accent">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-display text-xl text-editorial-text mb-3">{pilar.title}</h4>
                  <p className="font-body text-xs text-editorial-muted leading-relaxed">
                    {pilar.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Values Area */}
        <div className="mt-24 pt-12 border-t border-editorial-border">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="font-display text-2xl sm:text-3xl text-editorial-text mb-4 italic">Nuestra Brújula de Acción</h3>
            <p className="font-body text-sm text-editorial-muted leading-relaxed max-w-2xl mx-auto uppercase tracking-widest">Principios Rectores</p>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {mapsData.values.map((value, index) => {
              const icons = [HeartHandshake, Users, Sprout, Heart, ShieldCheck];
              const Icon = icons[index % icons.length];
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-editorial-glass rounded-2xl p-8 transition-all duration-300 border border-white/10 flex flex-col items-start"
                >
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-6 text-editorial-accent">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-display text-xl text-editorial-text mb-3">{value.title}</h4>
                  <p className="font-body text-xs text-editorial-muted leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
