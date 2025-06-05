import React, { useState, useEffect } from 'react';

const MultiLanguageGreeting = () => {
  const greetings = [
    "Halo Internet!", // Indonesian
    "Hello Internet!", // English
    "インターネットの皆さん、こんにちは！", // Japanese
    "인터넷 여러분, 안녕하세요!", // Korean
    "¡Hola Internet!", // Spanish
    "Bonjour Internet!" // French
  ];

  const [currentGreeting, setCurrentGreeting] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    // Handle typing animation
    const typeEffect = () => {
      // Current greeting being typed
      const greeting = greetings[currentIndex];
      
      // If deleting
      if (isDeleting) {
        // Set current text to substring
        setCurrentGreeting(greeting.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
        setTypingSpeed(50); // Faster when deleting
        
        // If fully deleted, switch to typing mode and next greeting
        if (charIndex <= 1) {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % greetings.length);
          setTypingSpeed(80);
        }
      } 
      // If typing
      else {
        setCurrentGreeting(greeting.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
        
        // Randomize typing speed slightly to make it look more natural
        const randomSpeed = Math.floor(Math.random() * 50) + 70;
        setTypingSpeed(randomSpeed);
        
        // If fully typed, pause then delete
        if (charIndex >= greeting.length - 1) {
          setTypingSpeed(1200); // Pause before deleting
          setTimeout(() => {
            setIsDeleting(true);
          }, 1200);
        }
      }
    };

    // Set timeout for typing effect
    const timeout = setTimeout(typeEffect, typingSpeed);
    
    // Clean up timeout
    return () => clearTimeout(timeout);
  }, [currentGreeting, isDeleting, charIndex, currentIndex, typingSpeed]);

  return (
    <div className="relative">
      <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-2 text-gray-300 inline-block">
        <span className="typing-text relative">
          {currentGreeting}
          <span className="typing-cursor"></span>
        </span>
      </h2>
    </div>
  );
};

export default MultiLanguageGreeting;