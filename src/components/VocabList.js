import React from "react";
import Word from "./Word";
import { useNavigate } from 'react-router-dom';


const VocabList = ({words, setWords}) => {
    let navigate = useNavigate();

    const handleDelete = (id) => {
        alert("delete clicked!")
        console.log("delete id: ", id);
        setWords(words.filter((word) =>
            word.id !== id
        ))
        navigate(`/vocablist`)
    }

    return (
        <div className="flex-container">
            <h2>Vocab List</h2>
            <div className="vocab-list">
            {words.map((word) => {
                console.log(word);
                return (
                    <Word 
                    key={word.id}
                    id={word.id}
                    actualWord={word.actualWord}
                    article={word.article}
                    definition={word.definition}
                    sentence={word.sentence}
                    date={word.date}
                    handleDelete={handleDelete}
                    />
                )
            })}
            </div>
        </div>
    )
}

export default VocabList;