/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { GallerySection } from './components/GallerySection';
import { MediaSection } from './components/MediaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDetails } from './components/ProjectDetails';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  // If a user clicks a nav link while viewing details, go back to the landing page and scroll there
  useEffect(() => {
    const handleHashChange = () => {
      setSelectedProject(null);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleBack = () => {
    setSelectedProject(null);
    // Smooth scroll back to projects section after layout has rendered
    setTimeout(() => {
      const element = document.getElementById('projects');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 80);
  };

  return (
    <div className="min-h-screen bg-editorial-bg text-editorial-text font-sans selection:bg-editorial-accent selection:text-[#0A0D0B] transition-colors duration-300">
      <Navbar />
      <main>
        {selectedProject ? (
          <ProjectDetails project={selectedProject} onBack={handleBack} />
        ) : (
          <>
            <Hero />
            <AboutSection />
            <ProjectsSection onSelectProject={setSelectedProject} />
            <GallerySection />
            <MediaSection />
            <ContactSection />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
