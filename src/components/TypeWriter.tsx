'use client';
import { useEffect, useState } from 'react';

const TypeWriter = ({ texts }: { texts: string[] }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseDuration = 2000;

    const type = () => {
      const fullText = texts[currentTextIndex];
      
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }
      }
    };

    const timer = setTimeout(
      type,
      isDeleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timer);
  }, [currentText, currentTextIndex, isDeleting, texts]);

  return (
    <span className="inline-block bg-gradient-to-r from-cyan-600 to-amber-500 bg-clip-text text-transparent dark:from-cyan-400 dark:to-amber-400">
      {currentText}
      <span className="animate-pulse text-cyan-600 dark:text-cyan-400">|</span>
    </span>
  );
};

export default TypeWriter; 