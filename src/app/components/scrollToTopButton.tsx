import { useEffect, useState } from 'react';

export default function ScrollToTopButton() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
        setTimeout(() => setFadeIn(true), 100); // Delay the fade-in effect slightly
      } else {
        setFadeIn(false);
        setTimeout(() => setShowScrollButton(false), 100); // Delay hiding after fade-out
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {showScrollButton && (
        <button
          onClick={handleScrollToTop}
          className={`fixed bottom-10 right-10 p-3 bg-slate-500 text-white w-12 h-12 rounded-full shadow-lg hover:bg-slate-600 focus:outline-none transition-opacity duration-500 ${
            fadeIn ? 'opacity-100' : 'opacity-0'
          }`}>
          ↑
        </button>
      )}
    </>
  );
}
