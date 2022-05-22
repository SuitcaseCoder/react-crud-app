import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const Form = (props) => {

    // Word Hook
    const [word, setWord] = ({
        actualWord: '',
        article: '',
        definition: '',
        sentence: ''

    })

    const handleSubmit = (e)=>{
        e.preventDefault();
        alert("Form Submit Clicked!");
    }

    const handleInputChange = (e)=>{
        console.log("input: ", e.target);
        setWord(() => ({
            actualWord: e.target,
            article: 'der,die,das',
            definition: 'what does the word mean?',
            sentence: 'use the word in a sentence'

        }))
    }

    const { actualWord, article, definition, sentence } = word;


    return (
        <div>
            <h2>Form</h2>
            <form>
                <input type="text" placeholder="actualWord" onChange={handleInputChange}/>
                <input type="text" placeholder="article" onChange={handleInputChange}/>
                <input type="text" placeholder="definition" onChange={handleInputChange} />
                <input type="text" placeholder="sentence" onChange={handleInputChange}/>
                <button onSubmit={handleSubmit}></button>
            </form>

        </div>
    )
}

export default Form;