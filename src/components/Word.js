import React from "react";
import { useNavigate } from "react-router-dom";

const Word = ({
    id,
    actualWord,
    article,
    definition,
    sentence,
    date
}) => {

    let navigate = useNavigate();

    const handleEdit = (id) => {
        alert("edit clicked. id: ", id);
        navigate(`/edit-word/${id}`)

    }

    return (
        <div>
            <h2>Vocab Word:</h2>
            <h3>{actualWord}</h3>
            <div>
                <p>{article}</p>
                <p>{definition}</p>
                <p>{sentence}</p>
            </div>
            <button onClick={() => {handleEdit(id)}}>edit</button>
            <button>delete</button>
        </div>
    )
}

export default Word;