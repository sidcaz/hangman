import './App.css';
import React from 'react';
import LetterBox from './LetterBox';
import SingleLetterSearchbar from './SingleLetterSearchBar';

/**
 * ---- STAGE IMAGES (served from /public) ----
 * 0: no mistakes  -> noose only
 * 1: upper body
 * 2: upper + lower body
 * 3: one arm
 * 4: both arms
 * 5: one leg
 * 6: dead (final)
 *
 * Make sure the files exist in your public folder with exactly
 * these names (they’re already in the files you shared).
 */
const STAGE_FILES = [
  'noose.png',
  'upperbody.png',
  'upperandlowerbody.png',
  '1arm.png',
  'botharms.png',
  '1leg.png',
  'Dead.png',
];

// small sample list (can replace with your own)
const WORDS = [
  'MOREHOUSE',
  'SPELMAN',
  'BASKETBALL',
  'MUSEUM',
  'EXCELLENT',
  'REACT',
];

class HangmanGame extends React.Component {
  state = {
    wordList: WORDS,
    curWord: '',
    guessedLetters: [],
    wrongLetters: [],
    maxMistakes: STAGE_FILES.length - 1, // last stage is the loss
    gameOver: false,
    gameWon: false,
  };

  componentDidMount() {
    this.startNewGame();
  }

  startNewGame = () => {
    const w = this.state.wordList[
      Math.floor(Math.random() * this.state.wordList.length)
    ];
    this.setState({
      curWord: w.toUpperCase(),
      guessedLetters: [],
      wrongLetters: [],
      gameOver: false,
      gameWon: false,
    });
  };

  handleLetterGuess = (raw) => {
    const letter = (raw || '').toUpperCase();
    const { curWord, guessedLetters, wrongLetters, gameOver, gameWon, maxMistakes } = this.state;
    if (!letter || gameOver || gameWon) return;

    // prevent repeats
    if (guessedLetters.includes(letter) || wrongLetters.includes(letter)) return;

    if (curWord.includes(letter)) {
      const guessed = [...guessedLetters, letter];
      const allRevealed = curWord.split('').every((ch) => ch === ' ' || guessed.includes(ch));
      this.setState({
        guessedLetters: guessed,
        gameWon: allRevealed,
        gameOver: allRevealed,
      });
    } else {
      const wrong = [...wrongLetters, letter];
      const lost = wrong.length >= maxMistakes;
      this.setState({
        wrongLetters: wrong,
        gameOver: lost,
        gameWon: false,
      });
    }
  };

  renderStageImage = () => {
    const mistakes = this.state.wrongLetters.length;
    const stageIdx = Math.min(mistakes, STAGE_FILES.length - 1);
    const src = `${process.env.PUBLIC_URL}/${STAGE_FILES[stageIdx]}`;
    // centered image/noose+body
    return (
      <div className="hangman-wrap">
        <img
          className="hangman-img"
          src={src}
          alt={`Hangman stage ${stageIdx}`}
          draggable="false"
        />
      </div>
    );
  };

  renderWord = () => {
    const { curWord, guessedLetters } = this.state;
    return (
      <div className="word-display">
        {curWord.split('').map((ch, i) => (
          <span key={i} className="letter-blank">
            {ch === ' ' ? ' ' : guessedLetters.includes(ch) ? ch : '_'}
          </span>
        ))}
      </div>
    );
  };

  renderAlphabet = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const { guessedLetters, wrongLetters } = this.state;

    const boxClass = (l) =>
      guessedLetters.includes(l) ? 'correct' :
      wrongLetters.includes(l)   ? 'wrong'   : '';

    return (
      <div className="alphabet-container">
        <div className="letter-box-group">
          {alphabet.map((l) => {
            const disabled = guessedLetters.includes(l) || wrongLetters.includes(l);
            return (
              <LetterBox
                key={l}
                letter={l}
                boxClass={boxClass(l)}
                disabled={disabled}
                onClick={() => this.handleLetterGuess(l)}
              />
            );
          })}
        </div>
      </div>
    );
  };

  render() {
    const { wrongLetters, gameOver, gameWon } = this.state;
    return (
    <>
    <div className="header-bar">Hangman</div>

    <div className="game-container">
      


      <div className="game-container">
        <h1 className="title">Guess Your Best!</h1>

        {this.renderStageImage()}

        {this.renderWord()}

        <div className="wrong-letters">
          {wrongLetters.length > 0 && <>Wrong: {wrongLetters.join(' ')}</>}
        </div>

        {this.renderAlphabet()}

        {!gameOver && !gameWon && (
          <SingleLetterSearchbar onSearch={this.handleLetterGuess} />
        )}

        {(gameOver || gameWon) && (
          <button className="play-again-btn" onClick={this.startNewGame}>
            Play Again
          </button>
        )}

        {gameWon && <p className="game-status win">🎉 You Won! 🎉</p>}
        {gameOver && !gameWon && <p className="game-status lose">💀 You Lost 💀</p>}
      </div>
    </div>
    </>
    );
  }
}

export default HangmanGame;