import React, { useState } from 'react';
import { motion } from 'motion/react';
import { mapsData } from '../data';

export function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Nuevo mensaje de ${name}`);
    const body = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`);
    window.location.href = `mailto:${mapsData.profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-editorial-bg border-b border-editorial-border transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl sm:text-5xl italic text-editorial-text mb-6">
                Contáctanos
              </h2>
              <p className="font-body text-sm sm:text-base text-editorial-muted mb-12 max-w-md">
                ¿Interesado en colaborar, conocer más sobre nuestros proyectos o apoyarnos? Nos encantaría escucharte.
              </p>
            </motion.div>

            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-[10px] uppercase tracking-[0.2em] text-editorial-accent mb-2">Sede Principal</h3>
                <p className="text-sm text-editorial-text max-w-xs">{mapsData.profile.address}</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-[10px] uppercase tracking-[0.2em] text-editorial-accent mb-2">Comunicaciones</h3>
                <p className="text-sm text-editorial-text mb-1">{mapsData.profile.phone}</p>
                <a href={`mailto:${mapsData.profile.email}`} className="text-sm text-editorial-text hover:text-editorial-accent transition-colors">
                  {mapsData.profile.email}
                </a>
              </motion.div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-editorial-forest/30 border border-editorial-border rounded-2xl p-8"
          >
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-editorial-accent mb-6">Contacto Directo</h4>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-editorial-glass border border-editorial-border text-xs text-editorial-text p-4 rounded-lg focus:border-editorial-accent outline-none font-body transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-editorial-glass border border-editorial-border text-xs text-editorial-text p-4 rounded-lg focus:border-editorial-accent outline-none font-body transition-colors"
              />
              <textarea
                placeholder="Mensaje..."
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full bg-editorial-glass border border-editorial-border text-xs text-editorial-text p-4 rounded-lg focus:border-editorial-accent outline-none font-body transition-colors resize-none h-32"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-editorial-accent text-[#0A0D0B] font-bold text-[10px] uppercase tracking-[0.2em] py-4 rounded-lg hover:bg-white transition-colors"
              >
                Enviar Mensaje
              </button>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
