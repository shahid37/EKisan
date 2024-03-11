import React, { useContext } from 'react'
import Image from "next/image"
import TranslateIcon from '@mui/icons-material/Translate';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Login, Logout } from '@mui/icons-material';
import Link from 'next/link';
import { AuthContext } from '@/providers/AuthProviser';
const Navbar = () => {
    const { user } = useContext(AuthContext)
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
                    {
                        user ?
                            <Link href="/logout">
                                <Logout />
                            </Link>
                            :
                            <Link href="/auth/login">
                                <button className="button">Sign Up</button>
                            </Link>
                    }
                </div>
            </div>

        </div>
    )
}

export default Navbar