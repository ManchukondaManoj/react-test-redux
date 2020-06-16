import React from "react";
import PropTypes from "prop-types";

const GuessedWords = (props) => {
    let content;
    const { guessedWords } = props;
    if (!guessedWords.length) {
        content = (
            <span data-test="guess-instruction">
                Try to guess the secret word !
            </span>
        )
    } else {
        const guessedWordRows = guessedWords.map((word, index) => (
            <tr data-test="guessed-word" key={index}>
                <td>{word.guessedWord}</td>
                <td>{word.letterMatchCount}</td>
            </tr>
        ))
        content = (
            <div data-test="guessed-words">
                <h3>Guessed Words</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Guess</th>
                            <th>Matching Letters</th>
                        </tr>
                    </thead>
                    <tbody>
                        {guessedWordRows}
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <div data-test="component-gussed-words">
            {content}
        </div>
    )
};
GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        }).isRequired
    )
};
export default GuessedWords;