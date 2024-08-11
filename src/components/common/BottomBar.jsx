import { AuthContext } from '@/providers/AuthProviser';
import isRegisterdSeller from '@/util/seller/isRegisterdSeller';
import { Notifications, Store } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
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
        <button onClick={push("/")} className="item">
          <div className="icon">
            <HomeRoundedIcon />
          </div>
          <div className="name">Home</div>
        </button>
        <button onClick={push("/account")} className="item">
          <div className="icon">
            <PersonIcon />
          </div>
          <div className="name">You</div>
        </button>
        {
          isRegisterdSeller(user) ? <button onClick={push("/store")} className="item">
            <div className="icon">
              <Store />
            </div>
            <div className="name">Store</div>
          </button>
            :
            <button onClick={push("/notifications")} className="item">
              <div className="icon">
                <Notifications />
              </div>
              <div className="name">Updates</div>
            </button>
        }
        <button onClick={push("/cart")} className="item">
          <div className="icon">
            <Badge badgeContent={Object.keys(user?.cart || {}).length} color='error'>
              <ShoppingCart />
            </Badge>
          </div>
          <div className="name">Cart</div>
        </button>
      </div>
    </div >
  )
}

export default BottomBar