import '../css/TitleBar.css';

import Logo from './Logo.js'

function TitleBar(){
    return(
        <>
        <div className='titlebar'>
            <div className='logo'><Logo className='logo'/></div>
            <div className='authentication'>
                <span className='signInBtn'>Log In</span>
                <span className='signUpBtn'>Sign Up</span>
            </div>
        </div>
        </>
    )
}

export default TitleBar;