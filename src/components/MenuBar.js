import '../css/MenuBar.css';

import { GrHistory, GrAddCircle } from "react-icons/gr";
import { IoSettingsOutline, IoMenu } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";

function MenuBar(){
    return(
        <div className='menuBar'>
            <div className='menuBarIcon'>
                <IoMenu />
            </div>
            <div className="menuBarItems">
                <div className="top">
                    <GrAddCircle />
                    <GrHistory />
                </div>
                <div className="bottom">
                    <FaInfoCircle />
                    <IoSettingsOutline />
                </div>
            </div>
        </div>
    )
}

export default MenuBar;