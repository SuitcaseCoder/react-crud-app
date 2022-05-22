import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
import Navbar from "./Navbar";

const AddWord = ({words, setWords}) => {
    console.log(words);
    let navigate = useNavigate();


    const handleSubmit = (word) => {
        console.log("words: ", words);
        console.log("word: ", word);
        setWords([...words, word]);
        // words.push(word);
        navigate('/vocablist');
    }

    return (
        <div>
        <>
            <Form handleSubmit={handleSubmit} formTitle='Add Word'/>
        </>
        </div>

    )
}

export default AddWord;