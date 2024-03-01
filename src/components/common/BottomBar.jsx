import { AuthContext } from '@/providers/AuthProviser';
import isRegisterdSeller from '@/util/seller/isRegisterdSeller';
import { Notifications, Store } from '@mui/icons-material';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
const BottomBar = () => {
  const navigate = useRouter();
  const { user } = useContext(AuthContext)
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
        {
          isRegisterdSeller(user) ? <div onClick={push("/store")} className="item">
            <div className="icon">
              <Store />
            </div>
            <div className="name">Store</div>
          </div>
            :
            <div onClick={push("/notifications")} className="item">
              <div className="icon">
                <Notifications />
              </div>
              <div className="name">Updates</div>
            </div>
        }
        <div onClick={push("/cart")} className="item">
          <div className="icon">
            <ShoppingCart />
          </div>
          <div className="name">Cart</div>
        </div>
      </div>
    </div>
  )
}

export default BottomBar