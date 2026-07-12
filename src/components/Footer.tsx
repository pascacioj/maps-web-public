import { mapsData } from '../data';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-editorial-bg py-12 border-t border-editorial-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-12 border-b border-editorial-border pb-12">
          
          <div className="md:col-span-5 lg:col-span-5">
            <a href="#home" className="flex items-center space-x-3 mb-6">
              <div className="w-6 h-6 bg-editorial-accent rounded-full flex items-center justify-center text-editorial-bg font-bold text-[10px]">
                M
              </div>
              <span className="font-display text-xl tracking-tight uppercase font-bold italic text-editorial-text">
                MAPS A.C.
              </span>
            </a>
            <p className="font-body text-xs text-editorial-muted max-w-sm mb-6 leading-relaxed">
              Organización civil comprometida con el fomento a la convivencia del hombre con la naturaleza y el desarrollo sustentable en Chiapas, México.
            </p>
            <div className="text-[10px] uppercase tracking-[0.2em] text-editorial-accent">
              <p>Donataria Autorizada</p>
            </div>
          </div>

          <div className="md:col-span-3 lg:col-span-4">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-editorial-accent mb-6">Navegación</h4>
            <ul className="space-y-4 text-xs font-body text-editorial-muted">
              <li><a href="#home" className="hover:text-editorial-text transition-colors">Inicio</a></li>
              <li><a href="#about" className="hover:text-editorial-text transition-colors">Nosotros (Misión y Visión)</a></li>
              <li><a href="#projects" className="hover:text-editorial-text transition-colors">Proyectos Destacados</a></li>
              <li><a href="#contact" className="hover:text-editorial-text transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-editorial-accent mb-6">Socios Principales</h4>
            <ul className="space-y-3 text-[10px] font-body text-editorial-muted uppercase tracking-wider">
              {mapsData.partners.slice(0, 4).map((partner, idx) => (
                <li key={idx} className="border-b border-editorial-border pb-2 last:border-0">{partner}</li>
              ))}
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] font-body text-editorial-muted uppercase tracking-[0.1em]">
          <p className="mb-4 md:mb-0">
            &copy; {currentYear} {mapsData.profile.shortName}. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <span className="hover:text-editorial-text cursor-pointer transition-colors">Privacidad</span>
            <span className="hover:text-editorial-text cursor-pointer transition-colors">Términos</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
