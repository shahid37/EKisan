import React from 'react'
import Image from "next/image"
import TranslateIcon from '@mui/icons-material/Translate';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Logout } from '@mui/icons-material';
import Link from 'next/link';
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="mobile">
                <div className="menu-bar-icon hidden">
                    <MenuRoundedIcon />
                </div>
                <Link className='logo' href={"/"}>
                    <Image loading='lazy' width={35} height={35} alt='eKisan Darshan Logo' src={"/images/logo-transparent.png"} />
                    eKisan Darshan
                </Link>
                <div className="translate">
                    <TranslateIcon className='opacity-0' />
                    <Link href="/logout">
                        <Logout />
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Navbar