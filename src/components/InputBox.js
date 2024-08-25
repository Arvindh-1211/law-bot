import '../css/InputBox.css';
import { FaLink } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";

import { useState } from 'react';

function InputBox( { sendPrompt } ){
    const [prompt, setPrompt] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        sendPrompt(prompt)
    }

    return(
        <>
        <div className='inputField'>
            <div className='iconContainer'>
                <FaLink className='icon link'/>
            </div>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => { setPrompt(e.target.value) }} type='text' placeholder='Ask me anything..'></input>
            </form>
            <div className='iconContainer' onClick={handleSubmit}>
                <IoMdSend className='icon send'/>
            </div>
        </div>
        </>
    )
}

export default InputBox;