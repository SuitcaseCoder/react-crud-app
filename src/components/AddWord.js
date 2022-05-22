import React from "react";
import Form from "./Form";
import Navbar from "./Navbar";

const AddWord = ({words, setWords}) => {
    console.log(words);

    const handleSubmit = (word) => {
        console.log("words: ", words);
        console.log("word: ", word);
        setWords([...words, word]);
        words.push(word);

    }

    return (
        <div>
        <>
            <Form handleSubmit={handleSubmit}/>
        </>
        </div>
        // <div>
        // <h2>Add Word</h2>
        //     <Form handleSubmit={handleSubmit}/>
        // </div>

    )
}

export default AddWord;