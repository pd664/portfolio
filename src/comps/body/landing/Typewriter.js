import React, { useState, useEffect } from 'react';

const Typewriter = ({ texts, speed }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentTextIndex < texts.length) {
      if (currentIndex < texts[currentTextIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayText(texts[currentTextIndex].substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, speed);

        return () => clearTimeout(timeout);
      } else {
        setCurrentTextIndex(currentTextIndex + 1);
        setCurrentIndex(0);
      }
    }
  }, [currentIndex, currentTextIndex, speed, texts]);

  return (
    <div>
      <p>{displayText}</p>
    </div>
  );
};

export default Typewriter;