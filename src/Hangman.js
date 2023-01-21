import { randomWord, totalWords } from "./RandomWords"; // fetch for random word
import image0 from "./images/status0.png";
import image1 from "./images/status1.png";
import image2 from "./images/status2.png";
import image3 from "./images/status3.png";
import image4 from "./images/status4.png";
import image5 from "./images/status5.png";
import image6 from "./images/status6.png";
import { useState, useEffect} from 'react';


function Hangman (props) {
 // state for keeping track of the number of wrong guesses
    const [noOfWrong, setNoOfWrong] = useState(0);
    // state for keeping track of the guessed letters
    const [guessed, setGuessed] = useState(new Set());
    // state for keeping track of the correct answer
    const [answer, setAnswer] = useState('');
    // state for keeping track of whether the game is still loading
    const [isLoading, setIsLoading] = useState(false);
    // state for keeping track of whether the game is over
    const [gameOver, setGameOver] = useState(false);
    // state for keeping track of the number of correct guesses
    const [correctGuesses, setCorrectGuesses] = useState(0);
    const [data, setData] = useState([]);


    useEffect(() => {
        async function fetchWord() {
            setIsLoading(true);
            const wordx = await randomWord();
            const wordAll = await totalWords();
            setAnswer(wordx[0]);
            setData(wordAll.length);
            setIsLoading(false);
        }
        fetchWord();
    }, []);
    
    
    
    // function to handle a letter guess
    const handleGuess = (evt) => {
        let letter = evt.target.value;
        setGuessed((st) => st.add(letter));
        if (answer.includes(letter)) {
          setCorrectGuesses((st) => st + 1);
        } else {
          setNoOfWrong((st) => st + 1);
          checkGameOver();
        }
      };

     // function to check if the game is over 
     const checkGameOver = () => {
        if (!gameOver) {
            if (correctGuesses === answer.length) {
                setGameOver(true);
            } if (noOfWrong === maxWrong || noOfWrong >= 5) {
                setGameOver(true);
            }
        }
    }

 // function to generate the word with underscores and correctly guessed letters
    const guessedWord = () => {
        let word = '';
        for(let i = 0; i < answer.length; i++) {
            if(guessed.has(answer[i]) || gameOver) {
                word += answer[i];
            } else {
                word += '_';
            }
        }
        return word;
    };

    // function to generate the keypad of letters
    const generateKeypad = () => {
        return 'abcdefghijklmnopqrstuvwxyz'
            .split('')
            .map((letter) => (
                <button
                    key={letter}
                    value={letter}
                    onClick={handleGuess}
                    disabled={guessed.has(letter)}
                >
                    {letter}
                </button>
            ));
    };

    //Reset function is used to reset the game state by fetching a new word, 
    //resetting the number of wrong guesses, guessed letters and setting gameOver to false
    const reset = async () => {
        setIsLoading(true); // Loading screen ON
        setNoOfWrong(0);
        setGuessed(new Set());
        setGameOver(false);
        const wordx = await randomWord();
        setAnswer(wordx[0]);
        setIsLoading(false); // Loading screen OFF
    };

    const maxWrong = props.maxWrong || 6; //maxWrong is the maximum number of wrong guesses allowed before the player loses the game, the default is "6"
    const images = props.images || [image0, image1, image2, image3, image4, image5, image6];
    const isWinner = answer.split('').every(letter => guessed.has(letter)); //isWinner is a boolean that checks if the player has correctly guessed all the letters of the word


    return (
        <div className='Hangman'>
        {isLoading ? (
        <p>Loading...</p>
        ) : (
        <>
        <img src={images[noOfWrong]} alt='Hangman' />
        <div>
        <div>Total words in the game: {data}</div>
    </div>
        <p>
        Guesses Left: {maxWrong - noOfWrong} / {maxWrong}
        </p>
        <p>Guess the word</p>
        <p className='Hangman-word'>
        {answer ? guessedWord() : 'Loading...'}
        </p>
        <p className='Hangman-buttons'>
        {isWinner ? 'You Won!' : gameOver ? 'You Lose!' : generateKeypad()}
        </p>
        <button id='reset' onClick={reset}>
        Reset?
        </button>
        </>
        )}
        </div>
    );
            }

export default Hangman;
