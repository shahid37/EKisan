import React from 'react'
import Image from "next/image"
import TranslateIcon from '@mui/icons-material/Translate';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="mobile">
                <div className="menu-bar-icon">
                    <MenuRoundedIcon />
                </div>
                <div className="logo">
                    <Image width={35} height={35} alt='eKisan Darshan Logo' src={"/images/logo-transparent.png"} />
                    eKisan Darshan
                </div>
                <div className="translate">
                    <TranslateIcon />
                </div>
            </div>
            
        </div>
    )
}

export default Navbar