import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const AnimatedBox = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    // Use Anime.js to animate the box
    anime({
      targets: boxRef.current,
      translateX: 290, // Move the box 250 pixels to the right
      duration: 100, // Animation duration in milliseconds
      easing: 'easeInOutQuad', // Easing function
    });
  }, []); // Run the animation only once when the component mounts

  return <div ref={boxRef} style={{ width: '100px', height: '100px', background: 'blue' }}></div>;
};

export default AnimatedBox;
