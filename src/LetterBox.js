import React from 'react';

class LetterBox extends React.Component {
  handleKeyDown = (e) => {
    const { onClick, disabled } = this.props;
    if (disabled) return;
    if (e.key === 'Enter' || e.key === ' ') onClick?.();
  };

  render() {
    const { letter, boxClass = '', disabled = false, onClick } = this.props;
    const classes = `letter-box ${boxClass} ${disabled ? 'disabled' : ''}`;
    return (
      <div
        className={classes}
        role="button"
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        onClick={disabled ? undefined : onClick}
        onKeyDown={this.handleKeyDown}
        title={disabled ? 'Already guessed' : `Guess ${letter}`}
      >
        {letter}
      </div>
    );
  }
}

export default LetterBox;