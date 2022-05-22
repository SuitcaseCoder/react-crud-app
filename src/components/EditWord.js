import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "./Form";

const EditWord = ({words, setWords}) => {
    let navigate = useNavigate();
    const { id } = useParams();
    const wordToEdit = words.find((word) => word.id === id);
    // console.log(id);

    const handleSubmit = (word) => {
        console.log("word editword12: ", word);
        const filteredWords = words.filter((word) => word.id !== id);
        setWords([word, ...filteredWords]);
        navigate('/vocablist');
    } 

    return (
        <div>
            <Form word={wordToEdit} handleSubmit={handleSubmit}/>
        </div>
    )
}

export default EditWord;