import { useEffect, useState } from "react";
// img
import audio from "../../../../../Images/audio.png";
import children from "../../../../../Images/children.png";

// audio
import listenZ from "../../../../../Audio/listenZ.mp3";
import correctAudio from "../../../../../Audio/correctAnswer.mp3";
import wrongAudio from "../../../../../Audio/Zcharacter.mp3";

import { Button, Div, DivQusetion, Img, SPAN, Span } from "./style";
import TypedText from "../../../../TypedText";

export default function Question3() {
  const sentence = "يَقِفُ زُملاءُ زعْتَرٍ على الرَّصيفِ";
  const correctAnswer = "زعْتَرٍ";
  const [chosenAnswer, setChosenAnswer] = useState(null);
  const [isNewStyle, setIsNewStyle] = useState("");

  // audio
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isCorrectMusicPlaying, setIsCorrectMusicPlaying] = useState(false);
  const [isWrongAudioPlaying, setIsWrongAudioPlaying] = useState(false);


  useEffect(() => {
    if (isNewStyle === "correct") {
      setIsCorrectMusicPlaying(true); // Play audio - correct answer
      setIsWrongAudioPlaying(false);
    } else if (isNewStyle === "wrong") {
      setIsCorrectMusicPlaying(false);
      setIsWrongAudioPlaying(true); // Play audio - wrong answers
    } else {
      setIsCorrectMusicPlaying(false);
      setIsWrongAudioPlaying(false); // Stop audio for other cases
    }
  }, [isNewStyle]);

  const handleMusicIconClick = () => {
    setIsMusicPlaying(!isMusicPlaying);
  };

  return (
    <>
      <div style={{ display: "flex", backgroundColor: "#fff0e5", justifyContent: "space-between", alignItems: "center", marginTop: "16px" }}>
        <div>
          <Img src={audio} width="55px" style={{ cursor: "pointer" }} onClick={handleMusicIconClick} />
          {isMusicPlaying && <audio src={listenZ} autoPlay />}
        </div>
        <DivQusetion>
          <p>أسْمَعُ قِراءَةَ الْجُمْلَةِ التّالِيَةِ، ثُمَّ أَضَعُ خَطًّا تَحْتَ الْكَلِمَةِ الَّتي فيها حَرْفُ  
            <bdi>
              <Span>
              <TypedText
              strings={['(زَ) الزّاي']}
              typeSpeed={100}
              backSpeed={50}
              backDelay={1000}
              loop
              showCursor={false}
              />
              </Span>
              </bdi>
              </p>
        </DivQusetion>
      </div>


      <div style={{ display: "flex", flexDirection: "column", gap: "40px", alignItems: "center", marginTop: "20px" }}>
        <div>
          <Img src={children} />
        </div>
        <Div>
          <SPAN>
            {sentence?.split(" ")?.map(item =>  //convert to list "replace space to comma"
                <Button
                  key={item}
                  onClick={() => {
                    if (correctAnswer === item) {
                      setIsNewStyle("correct");
                      setChosenAnswer(item);

                    } else {
                      setIsNewStyle("wrong");
                      setChosenAnswer(item);
                    }
                  }}
                  isNewStyle={correctAnswer === item ? isNewStyle : ""}
                  isWrong={chosenAnswer === item && correctAnswer !== item}

                >
                  {item} {/* ذكر النص يلي موجود عنده العداد او يلي بيمثله الايتم */}
                </Button>
            )}
          </SPAN>
        </Div>
      </div>

      {isCorrectMusicPlaying && <audio src={correctAudio} autoPlay />}
      {isWrongAudioPlaying && <audio src={wrongAudio} autoPlay />}
    </>
  );
}
