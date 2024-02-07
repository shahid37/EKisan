
"use client"
import { AuthContext } from '@/providers/AuthProviser';
import { Lock } from '@mui/icons-material';
import Link from "next/link";
import { useContext } from 'react';
import EditFarmerProfile from '@/components/account/tabs/SellerInfo/farmer/EditFarmerProfile';
const Farmer = () => {
    const { user } = useContext(AuthContext)

    if (user.farmerData) {
        return (
            <div className="edit-profile">
               <EditFarmerProfile />
            </div >
        )
    }
    else {
        return (
            <div className='seller-info'>
                <img loading='lazy' src="/icons/store_locked.svg" alt="" />
                <div className="heading">You Store is Locked <Lock /></div>
                <Link href="create-profile/farmer">
                    <button className="button">Unlock Store</button>
                </Link>
            </div>
        )
    }
}

export default Farmer