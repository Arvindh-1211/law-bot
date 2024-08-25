import './App.css';
import TitleBar from './components/TitleBar';
import InputBox from './components/InputBox';

import ReactMarkdown from 'react-markdown';
import { Ollama } from 'ollama/browser'
import { useState } from 'react';

const ollama = new Ollama({ host: 'http://127.0.0.1:11434' })

function App() {
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
    <div className='lawBot'>
      <div className='MenuBar'>
        --
      </div>
      <div className='chatPage'>
        <div className='TitleBar'>
          <TitleBar />
        </div>
        <div className='chatAreaContainer'>
          <div className='chatArea'>
            <ReactMarkdown>{ reply }</ReactMarkdown>
          </div>
        </div>
        <div className='InputBox'>
          <InputBox sendPrompt={getReply}/>
        </div>
      </div>
      {/* <form onSubmit={ handleSubmit }>
        <input type='text' placeholder="What's on your mind?" onChange={ (e) => { setPrompt(e.target.value) } }></input>
        <input type='submit' value='Submit' onClick={ handleSubmit }></input>
      </form> */}
    </div>
  );
}

export default App;
