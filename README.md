ChatGPT said:
# 🎯 Hangman Game (React Version)

A fun, interactive Hangman game built with **React.js**, featuring a dark-themed design, centered layout, and dynamic game logic with progressive image stacking.

---

## 🕹️ How to Run the App

Follow these steps to set up and run the game locally:

1. **Open your terminal** and navigate to your project folder:
   ```bash
   cd your-project-folder


- Install all dependencies (if you haven’t already):

npm install


- Start the development server:

npm start


The app will automatically open in your browser at:
http://localhost:3000

If it doesn’t open automatically, you can manually visit the link in your browser.

🧩 Game Overview

This is a fully interactive hangman game where you must guess the hidden word one letter at a time.
Each incorrect guess adds a new part to the hangman drawing.
When you guess all the letters correctly, you win!
If the full hangman is drawn before you guess the word, you lose.

🧠 Game Logic

The game randomly selects a word from the following list:

clark, spelman, morehouse, tiger, panther, jaguar, homecoming, tailgate, gameday


You can guess letters using the single-letter search bar.

Each correct guess reveals the letter in the hidden word.

Incorrect guesses reduce your remaining lives and progressively add to the hangman image.

When you win or lose, a Play Again button appears instantly, resetting the game with a new random word.

🎨 Features

Dark mode design for modern look and comfort.

Progressive image stacking for hangman drawing as the game advances.

Alphabet display board showing guessed letters with:

🟩 Green = Correct guess

🟥 Red = Incorrect guess

Responsive layout with all content centered and balanced visually.

Smooth transitions and intuitive input controls.

🧱 Components Overview
Component	Description
HangmanGame.js - The parent component controlling all game logic, state management, and rendering.
LetterBox.js - Child component displaying each alphabet letter, color-coded based on correctness.
SingleLetterSearchBar.js - Child component that allows the player to input a single letter guess.
App.css - Contains all styling, including layout centering, button styling, and theme colors.
🛠️ Customization

You can easily customize the game:

Update or expand the word list in HangmanGame.js.

Replace or add new images for the hangman in your /src directory.

Modify the color scheme in App.css to fit your personal style.

💡 Quick Tips

Ensure all hangman images (noose.png, head.png, body.png, etc.) are in the correct folder.

Each image should visually represent one stage of the hangman’s progression.

To restart the project cleanly, you can clear the build cache:

npm run clean


then rerun npm start.

📂 File Structure
/src
 ├── App.css
 ├── HangmanGame.js
 ├── LetterBox.js
 ├── SingleLetterSearchBar.js
 ├── index.js
 └── index.css

✨ Enjoy the game and happy coding!