import React from "react";
import Word from "./Word";


const VocabList = ({words, setWords}) => {
    return (
        <div className="flex-container">
            <h2>Vocab List</h2>
            <div className="vocab-list">
            {words.map((word) => {
                console.log(word);
                return (
                    <Word 
                    id={word.id}
                    actualWord={word.actualWord}
                    article={word.article}
                    definition={word.definition}
                    sentence={word.sentence}
                    date
                    />
                )
            })}
            </div>
        </div>
    )
}

export default VocabList;