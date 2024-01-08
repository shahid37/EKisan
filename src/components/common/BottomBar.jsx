import React from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase';
const BottomBar = () => {
  const navigate = useRouter();
  const push = (link) => {
    return () => {
      navigate.push(link)
    }
  }
  return (
    <div className="bottom-nav">
      <div className="wrap">
        <div onClick={push("/")} className="item">
          <div className="icon">
            <HomeRoundedIcon />
          </div>
          <div className="name">Home</div>
        </div>
        <div onClick={push("/account")} className="item">
          <div className="icon">
            <PersonIcon />
          </div>
          <div className="name">You</div>
        </div>
        <div className="item">
          <div className="icon">
            <ShoppingCart />
          </div>
          <div className="name">Cart</div>
        </div>
        <div onClick={() => signOut(auth)} className="item">
          <div className="icon">
            <CallRoundedIcon />
          </div>
          <div className="name">Contact</div>
        </div>
      </div>
    </div>
  )
}

export default BottomBar