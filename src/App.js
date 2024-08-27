import './App.css';

import TitleBar from './components/TitleBar';
import InputBox from './components/InputBox';
import ChatArea from './components/ChatArea';
import MenuBar from './components/MenuBar';
import NavBar from './components/NavBar';

import { useState } from 'react';
import { Ollama } from 'ollama/browser'

const ollama = new Ollama({ host: 'http://127.0.0.1:11434' })

function App() {
    const [prompt, setPrompt] = useState('')

    return (
        <div className='landingPage'>
            <div className='MenuBar'>
				{/* -- */}
                {/* <NavBar /> */}
                <MenuBar />
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
