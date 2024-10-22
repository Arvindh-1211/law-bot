import '../css/ChatArea.css';

import ReactMarkdown from 'react-markdown';
import { useState, useEffect } from 'react';

import { CgProfile } from "react-icons/cg";


function PredefinedPrompt( { setPrompt } ){
    const prompts = [
        'What is Section 420 IPC?',
        'Number of Judges appointed at Supreme Court',
        'Is monitoring someone else social media legal?',
        'Can we take legal actions against a friend who does not return our money?'
    ]

    return(
        <div className='PredefinedPrompt'>
            <div className='upper'>
                <div onClick={ () => setPrompt(prompts[0]) }>{ prompts[0] }</div>
                <div onClick={ () => setPrompt(prompts[1]) }>{ prompts[1] }</div>
            </div>
            <div className='lower'>
                <div onClick={ () => setPrompt(prompts[2]) }>{ prompts[2] }</div>
                <div onClick={ () => setPrompt(prompts[3]) }>{ prompts[3] }</div>
            </div>
        </div>
    )
}



function ChatArea( { prompt, setPrompt, resetChat,ollama } ){
    const [id, setId] = useState(1)
    const [chat, setChat] = useState([])


    const getReply = async () => {
        const message = { role: 'user', content: prompt }
        const response = await ollama.chat({ model: 'Harvey', messages: [message], stream: true })
    
        let responseText = '';
        setChat([{ id: id, prompt: prompt, reply: responseText }, ...chat])
    
        for await (const part of response) {
            responseText += part.message.content;
            setChat(prevChat => {
                const newChat = [{ ...prevChat[0], reply: responseText }, ...prevChat.slice(1)];
                return newChat;
            })
        }
        setId(prevId => prevId + 1)
    }

    useEffect( () =>{
        if (prompt !== ''){
            getReply()
        }
    }, [prompt])
    useEffect( () =>{
            setChat([])
    }, [resetChat])


    const Conversation = chat.map( item =>
        <div id={ item.id }>
            <div className='prompt'>
                <span className='sender'>
                    <CgProfile />
                </span>
                <span className='content'>
                    {item.prompt}
                </span>
            </div>
            <div className='reply'>
                <span className='sender'>
                    <img className='harvey-icon' src='/Harvey.png' alt='logo' />
                </span>
                <span className='content'>
                    <ReactMarkdown>{ item.reply }</ReactMarkdown>
                </span>
            </div>
        </div>
    )

    return(
        <>
        <div className='chatArea'>
            { chat.length===0 ? <PredefinedPrompt setPrompt={setPrompt} /> : Conversation }
        </div>
        </>
    )
}

export default ChatArea;