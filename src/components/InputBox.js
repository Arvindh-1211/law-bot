import '../css/InputBox.css';
import { FaLink } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";

import { useState } from 'react';

function InputBox( { setPrompt } ){
    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setPrompt(input)
        setInput('')
    }

    return(
        <>
        <div className='inputField'>
            <div className='iconContainer'>
                <FaLink className='icon link'/>
            </div>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => { setInput(e.target.value) }} value={ input } type='text' placeholder='Ask me anything..'></input>
            </form>
            <div className='iconContainer' onClick={handleSubmit}>
                <IoMdSend className='icon send'/>
            </div>
        </div>
        </>
    )
}

export default InputBox;