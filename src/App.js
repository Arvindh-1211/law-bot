import './App.css';
import TitleBar from './components/TitleBar';
import InputBox from './components/InputBox';
import ChatArea from './components/ChatArea';

import { useState } from 'react';
import { Ollama } from 'ollama/browser'

const ollama = new Ollama({ host: 'http://127.0.0.1:11434' })

function App() {
    const [prompt, setPrompt] = useState('')
    const [reply, setReply] = useState('Hi!')

    const getReply = async (prompt) =>{
        const message = { role: 'user', content: prompt }
        const response = await ollama.chat({ model: 'Harvey', messages: [message], stream: true })
        let responseText = '';
        for await (const part of response) {
            responseText += part.message.content;
            setReply(responseText);
        }
    }

    return (
        <div className='landingPage'>
            <div className='MenuBar'>
                --
            </div>
            <div className='chatPage'>
                <div className='TitleBar'>
                    <TitleBar />
                </div>
                <div className='chatAreaContainer'>
					<ChatArea prompt={prompt} ollama={ollama} />
                </div>
                <div className='InputBox'>
                    <InputBox setPrompt={setPrompt}/>
                </div>
            </div>
        </div>
    );
}

export default App;
