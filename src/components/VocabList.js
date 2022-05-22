import React from "react";
import Word from "./Word";


const VocabList = ({words, setWords}) => {
    return (
        <div>
            <h2>Vocab List</h2>
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
    )
}

export default VocabList;