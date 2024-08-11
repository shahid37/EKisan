import React, { useContext, useState } from 'react'
import Image from "next/image"
import TranslateIcon from '@mui/icons-material/Translate';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Link from 'next/link';
import { AuthContext } from '@/providers/AuthProviser';
import { GridView, Home, Person, Sell, ShoppingBag, ShoppingCart, Notifications, Call, Logout } from '@mui/icons-material';
const Navbar = () => {
    const { user } = useContext(AuthContext)
    const [show, setShow] = useState(false)
    return (
        <div className="navbar">
            <div className="mobile">
                <div onClick={() => { setShow(!show) }} className="menu-bar-icon">
                    <MenuRoundedIcon />
                </div>
                <Link className='logo' href={"/"}>
                    <Image loading='lazy' width={35} height={35} alt='eKisan Darshan Logo' src={"/images/logo-transparent.png"} />
                    eKisan Darshan
                </Link>
                <div className="translate">
                    <TranslateIcon />
                </div>
            </div>
            <div onClick={() => { setShow(!show) }} className={`backdrop ${show ? 'active' : ""}`}></div>
            <div className={`side-menu ${show ? 'active' : ""}`} >
                <div className="user">
                    <Person />
                    {user ? <div className='flex justify-between w-full'><div>Hello, {user.name} </div> <Link href="/logout"><Logout /></Link></div> : <Link href="/auth">Login/Signup</Link>}
                </div>
                <ul>
                    <li>
                        <Link href="/"><Home /> Home</Link>
                    </li>

                    <hr />
                    <li>
                        <Link href="/auth"><Sell /> Become a Seller</Link>
                    </li>
                    <hr />
                    <li>
                        <Link href="/account/orders"><ShoppingBag /> My Order</Link>
                    </li>
                    <li>
                        <Link href="/cart"><ShoppingCart /> My Cart</Link>
                    </li>
                    <li>
                        <Link href="/account"><Person /> My Account</Link>
                    </li>
                    <li>
                        <Link href="/notifications"><Notifications /> My Notifications</Link>
                    </li>
                    <hr />
                    <li>
                        <Image loading='lazy' width={25} height={25} alt='eKisan Darshan Logo' src={"/images/logo-transparent.png"} />
                        <Link href="">  About eKisan Darshan</Link>
                    </li>
                    <li>
                        <Call />
                        <Link href="/contact"> Contact</Link>
                    </li>
                    <hr />
                    <li>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link href="/terms">Terms and Conditions</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar