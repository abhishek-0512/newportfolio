import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/hero/Hero';
import { AboutSection } from './components/sections/AboutSection';
import { EducationSection } from './components/sections/EducationSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { AchievementsSection } from './components/sections/AchievementsSection';
import { ContactSection } from './components/sections/ContactSection';
import { ResumeModal } from './components/sections/ResumeModal';
import { Toast } from './components/ui/Toast';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [resumeOpen, setResumeOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleSelectSection = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  return (
    <ThemeProvider>
      <div className="relative min-h-screen flex flex-col font-sans bg-slate-50 dark:bg-[#0b0f19] text-slate-900 dark:text-slate-100 selection:bg-brand-500/20 selection:text-brand-500 transition-colors duration-300">
        
        {/* Single-Section Navigation Bar */}
        <Navbar
          activeSection={activeSection}
          onSelectSection={handleSelectSection}
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* Main Section View Port - Displays ONLY the Selected Section */}
        <main className="flex-grow flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="w-full"
            >
              {activeSection === 'home' && (
                <Hero
                  onOpenResume={() => setResumeOpen(true)}
                  onNavigateToProjects={() => handleSelectSection('projects')}
                />
              )}
              {activeSection === 'about' && <AboutSection />}
              {activeSection === 'education' && <EducationSection />}
              {activeSection === 'experience' && <ExperienceSection />}
              {activeSection === 'skills' && <SkillsSection />}
              {activeSection === 'projects' && <ProjectsSection />}
              {activeSection === 'achievements' && <AchievementsSection />}
              {activeSection === 'contact' && (
                <ContactSection
                  onShowToast={showToast}
                  onOpenResume={() => setResumeOpen(true)}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Footer */}
        <Footer onSelectSection={handleSelectSection} />

        {/* Global Resume Modal & Toast */}
        <ResumeModal
          isOpen={resumeOpen}
          onClose={() => setResumeOpen(false)}
          onShowToast={showToast}
        />

        <Toast
          message={toastMessage || ''}
          isVisible={!!toastMessage}
          onClose={() => setToastMessage(null)}
        />

      </div>
    </ThemeProvider>
  );
}

export default App;
