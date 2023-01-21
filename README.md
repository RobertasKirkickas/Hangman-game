# Hangman Game

Hangman is a classic word guessing game where the player must guess a randomly generated word before running out of guesses.

## ![g1](image)

Contents
- [About the Project](#about-the-project)
- [Installation](#installation)
- [Game Rules](#game-rules)
- [Credits](#credits)

## About the Project
This project is a simple website built with HTML, CSS, and JavaScript that allows users to:
- Learn about new games
- Download high-quality wallpapers
- Save items for later
- Contact the authors of the website

## Installation
To install and run the game on your local machine, follow these steps:

1. Clone the repository to your local machine using the command git clone [Here](https://github.com/RobertasKirkickas/Hangman-game.git)
2. Navigate to the project directory using the command cd hangman-game
3. Install the required dependencies by running the command npm install
4. Start the game by running the command npm start
5. The game will be running on http://localhost:3000 in your web browser

## Game Rules

- A word is randomly generated from the word library when the game starts
- The player must guess the word by clicking on individual letters from an on-screen keypad
- For each incorrect guess, the player loses one out of a total of 6 "guesses left" and an image is displayed showing an increasingly complete hangman figure
- If the player correctly guesses all the letters of the word before running out of guesses, they win the game
- If the player runs out of guesses before correctly guessing the word, they lose the game
- The game can be reset at any time by clicking the "Reset" button, which will get a new word and reset the number of guesses and the guessed letters.

## Built With
- React
- Bootstrap
- Sass
- AOS

## Credits
[Robertas Kirkickas](https://github.com/RobertasKirkickas)
