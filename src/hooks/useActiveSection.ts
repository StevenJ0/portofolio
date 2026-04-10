import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds: string[], defaultSection: string = '') {
  const [activeSection, setActiveSection] = useState<string>(defaultSection || sectionIds[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      // Using -50% rootMargin creates a horizontal line in the middle of the viewport.
      // Whichever section crosses this line is considered active.
      { rootMargin: '-50% 0px -50% 0px' }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionIds]);

  return { activeSection, setActiveSection };
}
