/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { GallerySection } from './components/GallerySection';
import { MediaSection } from './components/MediaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-editorial-bg text-editorial-text font-sans selection:bg-editorial-accent selection:text-[#0A0D0B] transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <GallerySection />
        <MediaSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
