import React from 'react';
import Typed from 'react-typed';

const TypedText = ({ strings, typeSpeed, backSpeed, backDelay, loop,showCursor }) => {
  return (
    <Typed
      strings={strings}      // Array of strings to be typed
      typeSpeed={typeSpeed}  // Typing speed in milliseconds
      backSpeed={backSpeed}  // Backspacing speed in milliseconds
      backDelay={backDelay}  // Time before backspacing starts in milliseconds
      loop={loop}            // Whether to loop the strings
      showCursor={showCursor}
    />
  );
};

export default TypedText;
