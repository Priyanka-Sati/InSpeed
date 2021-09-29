import React from "react";
import ChallengeDetailsCards from "../ChallengeDetailsCards/ChallengeDetailsCards";
import TypingChallenge from "../TypingChallenge/TypingChallenge";
import "./TypingChallengeContainer.css";

const TypingChallengeContainer = ({
  selectedParagraph,
  words,
  characters,
  wpm,
  timeRemaining,
  timeStarted,
  testInfo,
  onInputChange,
}) => {
  return (
    <div className="typing-challenge-container">
      {/* Details Section */}

      <div className="details-container">
        <ChallengeDetailsCards cardName="Words" cardValue={words} />

        <ChallengeDetailsCards cardName="Characters" cardValue={characters} />

        <ChallengeDetailsCards cardName="Speed" cardValue={wpm} />
      </div>

      <div className="typewriter-container">
        <TypingChallenge
          timeStarted={timeStarted}
          timeRemaining={timeRemaining}
          selectedParagraph={selectedParagraph}
          testInfo={testInfo}
          onInputChange={onInputChange}
        />
      </div>
    </div>
  );
};

export default TypingChallengeContainer;
