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
    <>
      {/* Nuestro Propósito Section with Background */}
      <section id="about" className="relative py-24 border-b border-editorial-border transition-colors overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/bg-purpose.jpg" 
            alt="Nuestro Propósito background" 
            className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-editorial-bg/75 transition-colors duration-300" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-editorial-bg to-transparent pointer-events-none transition-colors duration-300" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-editorial-bg to-transparent pointer-events-none transition-colors duration-300" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
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
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Mision Card */}
            <motion.div 
              variants={itemVariants}
              className="bg-editorial-glass backdrop-blur-md rounded-2xl p-8 transition-all duration-300 border border-editorial-border group relative overflow-hidden hover:border-editorial-accent"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 bg-editorial-glass border border-editorial-border rounded-full flex items-center justify-center mb-6 text-editorial-accent">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="font-display text-2xl text-editorial-text mb-4 italic">Misión</h3>
                <p className="font-body text-xs sm:text-sm text-editorial-text leading-relaxed">
                  {mapsData.about.mision}
                </p>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div 
              variants={itemVariants}
              className="bg-editorial-glass backdrop-blur-md rounded-2xl p-8 transition-all duration-300 border border-editorial-border group relative overflow-hidden hover:border-editorial-accent"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 bg-editorial-glass border border-editorial-border rounded-full flex items-center justify-center mb-6 text-editorial-accent">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="font-display text-2xl text-editorial-text mb-4 italic">Visión</h3>
                <p className="font-body text-xs sm:text-sm text-editorial-text leading-relaxed">
                  {mapsData.about.vision}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Objeto Section with Background */}
      <section id="objeto" className="relative py-24 border-b border-editorial-border transition-colors overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/bg-object.jpg" 
            alt="Objeto background" 
            className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-editorial-bg/75 transition-colors duration-300" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-editorial-bg to-transparent pointer-events-none transition-colors duration-300" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-editorial-bg to-transparent pointer-events-none transition-colors duration-300" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="font-display text-3xl sm:text-4xl text-editorial-text mb-4 italic">Objeto</h3>
            <p className="font-body text-sm sm:text-base text-editorial-text leading-relaxed max-w-2xl mx-auto">
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
                  className="bg-editorial-glass backdrop-blur-md rounded-2xl p-8 transition-all duration-300 border border-editorial-border hover:border-editorial-accent"
                >
                  <div className="w-12 h-12 bg-editorial-glass border border-editorial-border rounded-full flex items-center justify-center mb-6 text-editorial-accent">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-display text-xl text-editorial-text mb-3">{pilar.title}</h4>
                  <p className="font-body text-xs sm:text-sm text-editorial-text/90 leading-relaxed">
                    {pilar.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Nuestra Brújula de Acción with Background */}
      <section id="values" className="relative py-24 border-b border-editorial-border transition-colors overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/bg-compass.jpg" 
            alt="Valores background" 
            className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-editorial-bg/75 transition-colors duration-300" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-editorial-bg to-transparent pointer-events-none transition-colors duration-300" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-editorial-bg to-transparent pointer-events-none transition-colors duration-300" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="font-display text-3xl sm:text-4xl text-editorial-text mb-4 italic">Nuestra Brújula de Acción</h3>
            <p className="font-body text-xs sm:text-sm text-editorial-accent uppercase tracking-widest font-bold">Principios Rectores</p>
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
                  className="bg-editorial-glass backdrop-blur-md rounded-2xl p-8 transition-all duration-300 border border-editorial-border flex flex-col items-start hover:border-editorial-accent"
                >
                  <div className="w-12 h-12 bg-editorial-glass border border-editorial-border rounded-full flex items-center justify-center mb-6 text-editorial-accent">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-display text-xl text-editorial-text mb-3">{value.title}</h4>
                  <p className="font-body text-xs sm:text-sm text-editorial-text/90 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}
