import React, { useState } from 'react';

const UnderlineWordWithZ = () => {
  const sentence='يَقِفُ زملاءُ زعْتَرٍ على الرَّصيفِ.';
  const [underlinedWord, setUnderlinedWord] = useState('');



  const handleUnderlineZClick = () => {
    const words = sentence.split(' ');
    const wordWithZ = words.find((word) => word.includes('ز'));

    if (wordWithZ) {
      setUnderlinedWord(wordWithZ);
    } else {
      setUnderlinedWord('');
    }
  };

  return (
    <div>
      <button onClick={handleUnderlineZClick}>Underline Z</button>
      <div style={{ marginTop: '10px' }}>
        (
          <p>
            {sentence.split(' ').map((word, index) => (
              <span key={index}>
                {word === underlinedWord ? (
                  <span className="underlined-letter">
                    {word.split('').map((char, i) => (
                      <span key={i} style={{ textDecoration: char === 'ز' ? 'underline' : 'none' }}>
                        {char}
                      </span>
                    ))}
                  </span>
                ) : (
                  word
                )}
                {index !== sentence.split(' ').length - 1 && ' '}
              </span>
            ))}
          </p>
        )
      </div>

    </div>
  );
};

export default UnderlineWordWithZ;
