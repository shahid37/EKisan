
"use client"
import { AuthContext } from '@/providers/AuthProviser';
import createFramerProfile from '@/util/create-profile/createFramerProfile';
import fetchCategories from '@/util/product/fetchCategories';
import fetchCrops from '@/util/product/fetchCrops';
import { Delete, Lock } from '@mui/icons-material';
import Link from "next/link";
import Radio from '@mui/material/Radio';
import { useContext, useEffect, useState } from 'react';
const Farmer = () => {
    const { user } = useContext(AuthContext)

    if (user.farmerData) {
        return (
            <div className="create-profile">
               
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