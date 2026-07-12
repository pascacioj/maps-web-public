import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  TreePine, 
  Cpu, 
  Users, 
  Network, 
  HeartHandshake, 
  ShieldCheck, 
  Calendar, 
  MapPin, 
  Tag 
} from 'lucide-react';

interface Project {
  title: string;
  period: string;
  description: string;
  image: string;
  category: string;
}

interface ProjectDetailsProps {
  project: Project;
  onBack: () => void;
}

export function ProjectDetails({ project, onBack }: ProjectDetailsProps) {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const isQuetzalProject = project.title.toLowerCase().includes('pavón') || project.title.toLowerCase().includes('quetzal');

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-editorial-bg text-editorial-text pt-24 pb-32 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <motion.button
          onClick={onBack}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium text-editorial-accent hover:text-editorial-text transition-colors mb-12 cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          <span>Volver a Proyectos</span>
        </motion.button>

        {/* Hero Header Card */}
        <div className="relative rounded-3xl overflow-hidden mb-16 border border-editorial-border">
          <div className="absolute inset-0 z-0">
            <img 
              src={isQuetzalProject ? '/images/bg-compass.jpg' : project.image} 
              alt={project.title} 
              className="w-full h-full object-cover object-center scale-[1.01] transition-transform duration-700 hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-editorial-bg/85 transition-colors duration-300" />
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-editorial-bg to-transparent pointer-events-none" />
          </div>

          {/* Header Content */}
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 flex flex-col justify-end min-h-[400px]">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[9px] font-bold tracking-widest uppercase bg-editorial-accent text-editorial-bg border border-editorial-accent/30">
                <Tag className="w-3 h-3 mr-1" />
                {project.category}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[9px] font-bold tracking-widest uppercase bg-editorial-glass text-editorial-text border border-editorial-border backdrop-blur-md">
                <MapPin className="w-3 h-3 mr-1" />
                Chiapas, México
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl italic text-editorial-text tracking-tight mb-6 max-w-4xl">
              {isQuetzalProject ? "Conservando el Legado Natural: Nuestro Modelo de Gestión Integral" : project.title}
            </h1>

            <p className="font-body text-base sm:text-lg text-editorial-muted leading-relaxed max-w-3xl">
              {isQuetzalProject 
                ? "En MAPS A.C., nuestra labor en la Reserva de la Biosfera El Triunfo y el Volcán Tacaná trasciende la protección aislada de especies como el quetzal y el pavón. Hemos consolidado un enfoque multidimensional donde la preservación ecológica y el desarrollo humano convergen para garantizar la salud de nuestros bosques de niebla."
                : project.description
              }
            </p>
          </div>
        </div>

        {/* Custom Rich Content for Quetzal Project */}
        {isQuetzalProject ? (
          <div className="space-y-20">
            
            {/* Impactos Generales Section */}
            <div>
              <div className="max-w-2xl mb-12">
                <span className="text-[10px] text-editorial-accent uppercase tracking-[0.2em] font-bold block mb-3">Resultados del Proyecto</span>
                <h2 className="font-display text-3xl sm:text-4xl text-editorial-text italic">
                  Impactos Generales de Nuestra Gestión
                </h2>
                <div className="h-[1px] bg-editorial-accent/30 w-24 mt-4" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Impact Card 1 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-editorial-glass border border-editorial-border rounded-2xl p-8 hover:border-editorial-accent transition-colors"
                >
                  <div className="w-12 h-12 bg-editorial-glass border border-editorial-border rounded-full flex items-center justify-center mb-6 text-editorial-accent">
                    <TreePine className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-xl text-editorial-text mb-4">
                    Infraestructura y Conservación
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-editorial-muted leading-relaxed">
                    Hemos implementado intervenciones sostenibles y de bajo impacto que permiten la canalización del flujo turístico y la protección de zonas críticas de anidación. Esto reduce significativamente la presión humana sobre el ecosistema y mitiga la degradación del suelo.
                  </p>
                </motion.div>

                {/* Impact Card 2 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-editorial-glass border border-editorial-border rounded-2xl p-8 hover:border-editorial-accent transition-colors"
                >
                  <div className="w-12 h-12 bg-editorial-glass border border-editorial-border rounded-full flex items-center justify-center mb-6 text-editorial-accent">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-xl text-editorial-text mb-4">
                    Vigilancia Tecnológica
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-editorial-muted leading-relaxed">
                    La transición hacia un ecosistema digital avanzado —integrando monitoreo satelital y plataformas especializadas— nos permite tomar decisiones basadas en evidencia científica en tiempo real. Esto ha fortalecido nuestra capacidad de disuadir actividades ilícitas ambientales y proteger la integridad de la fauna prioritaria.
                  </p>
                </motion.div>

                {/* Impact Card 3 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-editorial-glass border border-editorial-border rounded-2xl p-8 hover:border-editorial-accent transition-colors"
                >
                  <div className="w-12 h-12 bg-editorial-glass border border-editorial-border rounded-full flex items-center justify-center mb-6 text-editorial-accent">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-xl text-editorial-text mb-4">
                    Fortalecimiento Social
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-editorial-muted leading-relaxed">
                    Hemos transformado a los pobladores locales en los principales aliados de la conservación. Al empoderar a las comunidades a través de modelos de turismo sustentable y profesionalizar a los guardabosques en capacidades técnicas y humanas, hemos logrado que el bienestar social y la salud del ecosistema avancen de la mano.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Lecciones Aprendidas Section */}
            <div>
              <div className="max-w-2xl mb-12">
                <span className="text-[10px] text-editorial-accent uppercase tracking-[0.2em] font-bold block mb-3">Filosofía de Trabajo</span>
                <h2 className="font-display text-3xl sm:text-4xl text-editorial-text italic">
                  Lecciones Aprendidas: Un Camino hacia la Resiliencia
                </h2>
                <div className="h-[1px] bg-editorial-accent/30 w-24 mt-4" />
              </div>

              <div className="space-y-6">
                {/* Lesson 1 */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row gap-6 p-8 rounded-2xl bg-editorial-glass border border-editorial-border hover:border-editorial-accent/50 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-editorial-glass border border-editorial-border rounded-full flex items-center justify-center text-editorial-accent">
                    <Network className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-editorial-text mb-2 italic">Sinergia Estratégica</h3>
                    <p className="font-body text-xs sm:text-sm text-editorial-muted leading-relaxed">
                      La conservación efectiva no puede depender exclusivamente de la vigilancia técnica; requiere una integración constante entre el monitoreo científico, la protección activa del territorio y el desarrollo de alternativas económicas para las comunidades.
                    </p>
                  </div>
                </motion.div>

                {/* Lesson 2 */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex flex-col md:flex-row gap-6 p-8 rounded-2xl bg-editorial-glass border border-editorial-border hover:border-editorial-accent/50 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-editorial-glass border border-editorial-border rounded-full flex items-center justify-center text-editorial-accent">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-editorial-text mb-2 italic">Gobernanza Compartida</h3>
                    <p className="font-body text-xs sm:text-sm text-editorial-muted leading-relaxed">
                      La preservación del entorno natural es sostenible únicamente cuando se involucra activamente a la población local, reduciendo la marginación y convirtiéndolos en custodios legales y económicos de su propio territorio.
                    </p>
                  </div>
                </motion.div>

                {/* Lesson 3 */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col md:flex-row gap-6 p-8 rounded-2xl bg-editorial-glass border border-editorial-border hover:border-editorial-accent/50 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-editorial-glass border border-editorial-border rounded-full flex items-center justify-center text-editorial-accent">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-editorial-text mb-2 italic">Territorio de Paz</h3>
                    <p className="font-body text-xs sm:text-sm text-editorial-muted leading-relaxed">
                      Nuestro modelo demuestra que el cuidado del patrimonio natural es una vía fundamental para promover la paz territorial, asegurando que la protección de la biodiversidad sea percibida como una fuente de desarrollo y orgullo comunitario.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

          </div>
        ) : (
          /* Generic Project Content for Fallback */
          <div className="space-y-12">
            <div>
              <h2 className="font-display text-3xl text-editorial-text italic mb-6">Detalles del Proyecto</h2>
              <div className="h-[1px] bg-editorial-border w-full mb-8" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="font-display text-xl text-editorial-text mb-4">Descripción General</h3>
                  <p className="font-body text-sm text-editorial-muted leading-relaxed">
                    Este proyecto liderado por {project.category === "Conservación" ? "MAPS A.C." : "nuestros equipos especializados"} se centra en la aplicación de metodologías regenerativas y de concientización social en las áreas clave de Chiapas. Durante el periodo {project.period}, se han consolidado estrategias territoriales sólidas para mitigar los impactos ambientales y educar a las comunidades circundantes.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-xl text-editorial-text mb-4 font-bold">Objetivos Clave</h3>
                  <ul className="space-y-3 font-body text-sm text-editorial-muted">
                    <li className="flex items-start">
                      <span className="text-editorial-accent mr-2 font-bold">•</span>
                      Monitoreo ambiental integral de áreas críticas de biodiversidad.
                    </li>
                    <li className="flex items-start">
                      <span className="text-editorial-accent mr-2 font-bold">•</span>
                      Capacitación y empoderamiento de brigadas e integrantes comunitarios locales.
                    </li>
                    <li className="flex items-start">
                      <span className="text-editorial-accent mr-2 font-bold">•</span>
                      Promoción del desarrollo sustentable y la gobernanza territorial participativa.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer Navigation within Project Details */}
        <div className="mt-20 pt-12 border-t border-editorial-border flex justify-between items-center">
          <button
            onClick={onBack}
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium text-editorial-muted hover:text-editorial-accent transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            <span>Volver</span>
          </button>
          
          <span className="font-display text-sm italic text-editorial-muted">
            MAPS A.C. // Sostenibilidad y Acción
          </span>
        </div>

      </div>
    </motion.div>
  );
}
