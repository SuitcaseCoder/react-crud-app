import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const Form = (props) => {

    // Word Hook
    const [word, setWord] = useState({
        actualWord: props.actualWord ? props.word.actualWord: '',
        article: props.article ? props.word.article: '',
        definition: props.definition ? props.word.definition: '',
        sentence: props.sentence ? props.word.sentence: ''
    })

    const { actualWord, article, definition, sentence } = word;

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form Submit Clicked!");

        // these are the values of the input fields
        const values = [actualWord, article, definition, sentence];

        const allFieldsFilled = values.every((field) => {
            // trim removes additional white space before and after
            const value = `${field}`.trim();
            // return the input val as long as it's not empty
            return value !== '';
        })

        if(allFieldsFilled){
            const word = {
                id: uuidv4(),
                actualWord,
                article,
                definition,
                sentence,
                date: new Date()
            };
        props.handleSubmit(word);
        }
    }



    const handleInputChange = (e)=>{
        console.log("input: ", e.target.value);

        // this is key! It's what's allowing us to have one handleInput change based on different inputs by checking the input's "name" attr
        const { name, value } = e.target;

        // prevState is the same as useState EXCEPT it changes the state based on prior state, it doesn't do a full re-render with blank state
        setWord((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    return (
        <div className="flex-column">
            <h2 className="title">{props.formTitle}</h2>
            <form className="flex-container" onSubmit={handleSubmit}>
                <label htmlFor="actualWord">VocabWord:</label>
                <input type="text" name="actualWord" value={actualWord} placeholder="actualWord" onChange={handleInputChange}/>
                
                <label htmlFor="article">der,die,das?</label>
                <input type="text" name="article" value={article} placeholder="article" onChange={handleInputChange}/>
                
                <label htmlFor="definition">meaning?</label>
                <input type="text" name="definition" value={definition} placeholder="definition" onChange={handleInputChange} />
                
                <label htmlFor="sentence">example sentence:</label>
                <input type="text" name="sentence" value={sentence} placeholder="sentence" onChange={handleInputChange}/>
                
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default Form;