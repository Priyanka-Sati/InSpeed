import React from "react";
import "./TestContainer.css";
import TryAgain from "../TryAgain/TryAgain";
import TypingChallengeContainer from "../TypingChallengeContainer/TypingChallengeContainer";

const TestContainer = ({
  selectedParagraph,
  words,
  characters,
  wpm,
  timeRemaining,
  timeStarted,
  testInfo,
  onInputChange,
  startAgain
}) => {
  return (
    <div className="test-container">
      {timeRemaining > 0 ? (
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="typing-challenge-cont"
        >
          <TypingChallengeContainer
            timeRemaining={timeRemaining}
            timeStarted={timeStarted}
            words={words}
            characters={characters}
            wpm={wpm}
            selectedParagraph={selectedParagraph}
            testInfo={testInfo}
            onInputChange={onInputChange}
          />
        </div>
      ) 
      
      : (
        <div className="try-again-container">
          <TryAgain words={words} characters={characters} wpm={wpm} startAgain={startAgain}/>
        </div>
      )}
    </div>
  );
};

export default TestContainer;
