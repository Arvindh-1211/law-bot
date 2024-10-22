import '../css/MenuBar.css';

import { GrHistory, GrAddCircle } from "react-icons/gr";
import { IoSettingsOutline, IoMenu } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";

import { useState } from 'react';

function MenuBar( { setResetChat, resetChat } ){
    const [ menuState, setMenuState ] = useState(false)

    return(
        <div className='menuBar'>
            <div className='tripledashIcon' onClick={ () => { setMenuState( !menuState ) } }>
                <IoMenu />
            </div>
            <div className="menuBarContainer">
                <div className="top">
                    <div className='menuBarItem' onClick={ () => { setResetChat(!resetChat) } }>
                        <GrAddCircle className='menuBarIcons' />
                        <span className={ menuState ? 'menuBarItemName active' : 'menuBarItemName inactive' }>New Chat</span>
                    </div>
                    <div className='menuBarItem'>
                        <GrHistory className='menuBarIcons' />
                        <span className={ menuState ? 'menuBarItemName active' : 'menuBarItemName inactive' }>History</span>
                    </div>
                </div>
                <div className="bottom">
                    <div className='menuBarItem'>
                        <FaInfoCircle className='menuBarIcons' />
                        <span className={ menuState ? 'menuBarItemName active' : 'menuBarItemName inactive' }>Info</span>
                    </div>
                    <div className='menuBarItem'>
                        <IoSettingsOutline className='menuBarIcons' />
                        <span className={ menuState ? 'menuBarItemName active' : 'menuBarItemName inactive' }>Settings</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuBar;