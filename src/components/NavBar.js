import '../css/NavBar.css';

import { GrHistory, GrAddCircle } from "react-icons/gr";
import { IoSettingsOutline, IoMenu, IoClose } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";

import { useState } from 'react';

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <>
        {showNav ? (<IoClose onClick={() => setShowNav(!showNav)} />) : (<IoMenu onClick={() => setShowNav(!showNav)} />)}
        <div className='static'>
            <div className='upper'>
                <div className='nav-link' title='New Chat'><GrAddCircle /></div>
                <div className='nav-link' title='History'><GrHistory /></div>
            </div>
            <div className='bottom-links'>
                <div className='nav-link' title='Info'><FaInfoCircle /></div>
                <div className='nav-link' title='Settings'><IoSettingsOutline /></div>
            </div>
        </div>
        <div className={showNav ? 'sidenav active' : 'sidenav'}>
            <div>
                <div className='menu-items'>New Chat</div>
                <div className='menu-items extra2'>History</div>
                <div className='bottom-links'>
                    <div className='menu-items-bottom extra1'>Info</div>
                    <div className='menu-items-bottom'>Settings</div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Navbar;