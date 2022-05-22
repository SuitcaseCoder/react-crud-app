import React from "react";
import Form from "./Form";

const AddWord = () => {

    const handleSubmit = (word) => {
        console.log(word);
    }

    return (
        <>
            <Form handleSubmit={handleSubmit}/>
        </>
        // <div>
        // <h2>Add Word</h2>
        //     <Form handleSubmit={handleSubmit}/>
        // </div>

    )
}

export default AddWord;