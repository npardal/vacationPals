import React, { useState, useEffect } from 'react';

const WordSlider = ({ words, duration, textStyle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % words.length);
    }, duration);

    return () => {
      clearInterval(intervalId);
    };
  }, [words.length, duration]);

  useEffect(() => {
    setCurrentWord(words[currentIndex]);
    setTransition(true);
    setTimeout(() => {
      setTransition(false);
    }, 500); // 500ms duration for transition, adjust as needed
  }, [currentIndex, words]);

  return (
    <div
      style={{
        overflow: 'hidden',
        height: '130px',
        display: 'flex',
       
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'transform 0.5s',
          transform: transition ? `translateY(-25px)` : 'translateY(0)',
          whiteSpace: 'nowrap',
          ...textStyle, // merge additional text styles with existing styles
        }}
      >
        {currentWord}
      </div>
    </div>
  );
};

export default WordSlider;