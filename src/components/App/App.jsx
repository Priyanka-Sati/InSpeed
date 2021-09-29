import React from "react";
import "./App.css";
import Nav from "../Nav/Nav";
import Landing from "../Landing/Landing";
import Footer from "../Footer/Footer";
import ChallengeSection from "../ChallengeSection/ChallengeSection";
import { SAMPLE_PARAGRAPHS } from "../../data/sampleParagraphs";

const TotalTime = 60;
const ServiceUrl = "http://metaphorpsum.com/paragraphs/1/9";
const DefaultState = 
  {
    selectedParagraph: "",
    timeStarted: false,
    timeRemaining: TotalTime,
    words: 0,
    characters: 0,
    wpm: 0,
    testInfo: [],
  };


class App extends React.Component {
  state = DefaultState;

  fetchNewParagraphFallback = () => {
    const data = SAMPLE_PARAGRAPHS[
      Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)
    ];

    const selectedParagraphArray = data.split("");
      const testInfo = selectedParagraphArray.map((selectedLetter) => {
        return {
          testLetter: selectedLetter,
          status: "notAttempted",
        };
      });
      this.setState({ ...DefaultState, testInfo, selectedParagraph: data });

  }

  fetchNewParagraph = () => {
    fetch(ServiceUrl)
    .then((response) => response.text())
    .then((data) => {
      const selectedParagraphArray = data.split("");
      const testInfo = selectedParagraphArray.map((selectedLetter) => {
        return {
          testLetter: selectedLetter,
          status: "notAttempted",
        };
      });
      this.setState({ ...DefaultState, testInfo, selectedParagraph: data });
    });
  }

  componentDidMount() {
    this.fetchNewParagraphFallback();
  }

  startTimer = () => {
    this.setState({ timeStarted: true });
    const timer = setInterval(() => {
      if (this.state.timeRemaining > 0) {
        //change the WPM
        const timeSpent = TotalTime - this.state.timeRemaining;
        const wpm =
          timeSpent > 0 ? (this.state.words / timeSpent) * TotalTime : 0;

        //changing the time
        this.setState({
          timeRemaining: this.state.timeRemaining - 1,
          wpm: parseInt(wpm),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
  };

  startAgain = () =>{
      this.fetchNewParagraphFallback();
      window.scrollTo(0, 0);
  }


  handleUserInput = (inputValue) => {
    if (!this.state.timeStarted) this.startTimer();

    const characters = inputValue.length;
    const words = inputValue.split(" ").length;
    const index = characters - 1;

    if (index < 0) {
      this.setState({
        testInfo: [
          {
            testLetter: this.state.testInfo[0].testLetter,
            status: "notAttempted",
          },
          ...this.state.testInfo.slice(1),
        ],
        characters,
        words,
      });
      return;
    }

    if (index >= this.state.selectedParagraph.length) {
      this.setState({ characters, words });
      return;
    }

    //
    const testInfo = this.state.testInfo;
    if (!(index === this.state.selectedParagraph.length - 1)) {
      testInfo[index + 1].status = "notAttempted";
    }

    //cheack for the correct type letters
    const isCorrect = inputValue[index] === testInfo[index].testLetter;

    //update
    testInfo[index].status = isCorrect ? "correct" : "incorrect";

    //update state
    this.setState({
      testInfo,
      words,
      characters,
    });
  };

  render() {
    console.log("render was call");

    return (
      <div className="app">
        <Nav />

        <Landing />

        <ChallengeSection
          selectedParagraph={this.state.selectedParagraph}
          words={this.state.words}
          characters={this.state.characters}
          wpm={this.state.wpm}
          timeRemaining={this.state.timeRemaining}
          timeStarted={this.state.timeStarted}
          testInfo={this.state.testInfo}
          onInputChange={this.handleUserInput}
          startAgain={this.startAgain}
        />

        <Footer />
      </div>
    );
  }
}

export default App;
