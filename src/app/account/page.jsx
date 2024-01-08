"use client"

import AccountTabs from '@/components/account/Tabs'
import { AuthContext } from '@/providers/AuthProviser'
import productLocation from '@/util/name/productLocation'
import { LocationOn } from '@mui/icons-material'
import { useContext } from 'react'

export default function Account() {
    const { user } = useContext(AuthContext)
    if (!user) {
        return null
    }
    else {
        return (
            <div className="user-account">
                <div className="detail">
                    <div className="image">
                        {
                            user.userType == "farmer" ?
                                <img src="/images/farmer.png" alt={"Farmer"} />
                                :
                                <img src="/images/corporate.svg" alt={"Corporate"} />

                        }


                    </div>
                    <div className="about">
                        <h3 className="name heading">
                            {user.name}
                        </h3>
                        <div className="location">
                            <LocationOn /> {(productLocation({ product: user }))}
                        </div>
                    </div>
                </div>
                <AccountTabs />
            </div>
        )
    }
}