import { useState } from 'react';

interface HeaderProps {
  handleScroll: (sectionId: string) => void;
}

export default function Header({ handleScroll }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div id="header" className="flex justify-between items-center bg-black min-[2560px]:m-8">
        <div id="name" className="text-5xl max-[320px]:text-4xl min-[2560px]:text-8xl font-sans text-white">
          <h1>Tahsinur Rahman</h1>
        </div>

        <div id="menu" className="hidden md:flex max-[768px]:flex-col max-[768px]:items-start max-[768px]:space-x-reverse space-x-6">
          <button onClick={() => handleScroll('experience-heading')} className="text-white font-sans text-2xl min-[2560px]:text-5xl">Experience</button>
          <button onClick={() => handleScroll('skills-heading')} className="text-white font-sans text-2xl min-[2560px]:text-5xl">Skills</button>
          <button onClick={() => handleScroll('education-heading')} className="text-white font-sans text-2xl min-[2560px]:text-5xl">Education</button>
          <button onClick={() => handleScroll('publications-heading')} className="text-white font-sans text-2xl min-[2560px]:text-5xl">Publications</button>
          <button onClick={() => handleScroll('contact-heading')} className="text-white font-sans text-2xl min-[2560px]:text-5xl">Contact</button>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-lg">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="bg-black text-white p-4 md:hidden">
          <button onClick={() => handleScroll('experience-heading')} className="block font-sans text-xl w-full text-left py-2">Experience</button>
          <button onClick={() => handleScroll('skills-heading')} className="block font-sans text-xl w-full text-left py-2">Skills</button>
          <button onClick={() => handleScroll('education-heading')} className="block font-sans text-xl w-full text-left py-2">Education</button>
          <button onClick={() => handleScroll('publications-heading')} className="block font-sans text-xl w-full text-left py-2">Publications</button>
          <button onClick={() => handleScroll('contact-heading')} className="block font-sans text-xl w-full text-left py-2">Contact</button>
        </div>
      )}
    </div>
  );
}