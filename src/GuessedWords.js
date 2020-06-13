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