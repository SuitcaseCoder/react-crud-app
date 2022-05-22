import React from "react";

const Word = ({
    id,
    actualWord,
    article,
    definition,
    sentence,
    date
}) => {

    console.log(id, actualWord, article);

    return (
        <div>
            <h2>Vocab Word:</h2>
            <h3>{actualWord}</h3>
            <div>
                <p>{article}</p>
                <p>{definition}</p>
                <p>{sentence}</p>
            </div>
            <button>edit</button>
            <button>delete</button>
        </div>
    )
}

export default Word;