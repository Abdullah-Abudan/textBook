import { styled } from "styled-components";
import { useEffect, useState } from "react";

// img
import audio from "../../../../../Images/audio.png";
import children from "../../../../../Images/children.png";

// audio
import listenZ from "../../../../../Audio/listenZ.mp3";
import correctAudio from "../../../../../Audio/correctAnswer.mp3";
import wrongAudio from "../../../../../Audio/Zcharacter.mp3";

export const Img = styled.img`
  object-fit: contain;
`;

const DivQusetion = styled.div`
  background-color: #fff0e5;
  font-size: 24px;
  margin-top: 6px;
  padding: 6px;
  font-weight: bold;
  padding-right: 19px;
`;

const Span = styled.span`
  color: #cd552d;
`;

const Div = styled.div`
  clip-path: polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%);
  background-color: #ffb011;
  width: 300px;
  height: 100px;
  position: relative;
  padding: 0 20px;
`;

const Button = styled.button`
  background-color: ${(props) => (props.isWrong ? "red" : props.isNewStyle === "correct" ? "green" : "#fff")};
  border: 1px solid #3e3e3e;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => (props.isNewStyle === "correct" ? "#fff" : "#000")};
  cursor: pointer;
`;
const SPAN = styled.span`
position: absolute;
top: 50%;
transform: translateY(-50%);
z-index: 22;
color: black;
font-weight: bold;
font-size: 20px;
display: flex;
align-items: center;
justify-content: center;
gap: 3px;

`;

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
          <p>أسْمَعُ قِراءَةَ الْجُمْلَةِ التّالِيَةِ، ثُمَّ أَضَعُ خَطًّا تَحْتَ الْكَلِمَةِ الَّتي فيها حَرْفُ <bdi><Span>(زَ) الزّاي </Span></bdi></p>
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
