import '../css/ChatArea.css';

import ReactMarkdown from 'react-markdown';
import { useState, useEffect } from 'react';

import { CgProfile } from "react-icons/cg";



function ChatArea( { prompt, ollama }  ){
    const [id, setId] = useState(1)
    const [chat, setChat] = useState([])


    const getReply = async () => {
        const message = { role: 'user', content: prompt }
        const response = await ollama.chat({ model: 'Harvey', messages: [message], stream: true })

        let responseText = '';
        setChat([...chat, {id : id, prompt : prompt, reply : responseText}])

        for await (const part of response) {
            responseText += part.message.content;
            setChat(prevChat => {
                const newChat = [...prevChat];
                newChat[newChat.length - 1] = { ...newChat[newChat.length - 1], reply: responseText };
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


    const conversation = chat.map( item =>
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
            { conversation }
        </div>
        </>
    )
}

export default ChatArea;