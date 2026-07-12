import { motion } from 'motion/react';

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=800",
    title: "Conservación Forestal"
  },
  {
    url: "https://images.unsplash.com/photo-1550853024-fae8cd4be47f?auto=format&fit=crop&q=80&w=800",
    title: "Protección de Fauna"
  },
  {
    url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=800",
    title: "Restauración Ecológica"
  },
  {
    url: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80&w=800",
    title: "Educación Ambiental"
  },
  {
    url: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=800",
    title: "Energías Limpias"
  },
  {
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=800",
    title: "Desarrollo Sustentable"
  }
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-24 bg-editorial-bg border-b border-editorial-border transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl sm:text-5xl italic text-editorial-text mb-4"
            >
              Galería
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-body text-sm sm:text-base text-editorial-muted max-w-md"
            >
              Un vistazo visual a nuestras actividades, ecosistemas protegidos y el equipo en acción.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl aspect-square bg-editorial-glass border border-editorial-border"
            >
              <img 
                src={`/images/galeria-${index + 1}.jpg`} 
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = img.url;
                }}
                alt={img.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 md:p-6">
                <span className="text-white font-display text-sm md:text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
