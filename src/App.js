import './App.css';
import Hangman from './Hangman'; // main game
import{ React, useEffect, useState }from 'react';
import bnr from "./images/bnr.png"; // header banner
import AOS from 'aos'; // effects
import 'aos/dist/aos.css'; // effects

function App() {
  useEffect(() => {
    AOS.init({duration: 3000});
  }, [])

  const [showHelp, setShowHelp] = useState(false); // Popout help panel
  
  return (
    <div className="App" data-aos="fade-out">

              <div id="bnrMain"> <img src={bnr} alt='Hangman' /> </div>
              <br />
      < Hangman />
      <br />
      <div className={`help-popout ${showHelp ? 'show' : 'hide'}`}>
                <h3>Help</h3>
                <ul>
    <li>The game is a classic hangman game where the player must guess a random word.</li><br />
    <li>When the game starts, a word is randomly generated from word library.</li><br />
    <li>The player must guess the word by clicking on individual letters from an on-screen keypad.</li><br />
    <li>For each incorrect guess, the player loses one out of a total of 6 "guesses left" and an image is displayed showing an increasingly complete hangman figure.</li><br />
    <li>If the player correctly guesses all the letters of the word before running out of guesses, they win the game.</li><br />
    <li>If the player runs out of guesses before correctly guessing the word, they lose the game.</li><br />
    <li>The game can be reset at any time by clicking the "Reset" button, which will get a new word and reset the number of guesses and the guessed letters.</li>
</ul>
            </div>
            <button className='help-button' onClick={() => setShowHelp(!showHelp)}>Help</button>
    </div>
  );
}

export default App;
