import React from "react";
import { useNavigate } from "react-router-dom";

const Word = ({
    id,
    actualWord,
    article,
    definition,
    sentence,
    date,
    handleDelete
}) => {

    let navigate = useNavigate();

    const handleEdit = (id) => {
        alert("edit clicked.");
        navigate(`/edit-word/${id}`)

    }

    return (
        <div className="card">
            <h3>{actualWord}</h3>
            <div>
                <p>{article}</p>
                <p>{definition}</p>
                <p>{sentence}</p>
            </div>
            <button onClick={() => {handleEdit(id)}}>edit</button>
            <button onClick={() => {handleDelete(id)}}>delete</button>
        </div>
    )
}

export default Word;