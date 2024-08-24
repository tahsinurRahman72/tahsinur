'use client'
import { useState } from 'react';

import Header from './components/header'
import Intro from './components/intro';
import Experience from './components/experience';
import Skills from './components/skills';
import Education from './components/education';
import Publications from './components/publications';
import Contact from './components/contact';
import ScrollToTopButton from './components/scrollToTopButton';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    if (isOpen) {
      setIsOpen(false); // Close the menu if it's open
    }
  };

  return (
  <main className="flex min-h-screen flex-col justify-between p-12">
    <Header handleScroll={handleScroll} />
    <br />
    <br />
    <Intro />
    <br />
    <br />
    <Experience />
    <br />
    <br />
    <Skills />
    <br />
    <br />
    <Education />
    <br />
    <br />
    <Publications />
    <br />
    <br />
    <Contact />
    <br />
    <br />
  <ScrollToTopButton /> 
  </main>
  );
}
