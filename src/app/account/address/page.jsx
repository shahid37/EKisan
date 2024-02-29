"use client"

import Address from '@/components/account/tabs/Address'
import { AuthContext } from '@/providers/AuthProviser'
import React, { useContext } from 'react'

const AddressPage = () => {
    const { user } = useContext(AuthContext)
    if (!user) {
        return null
    }
    else {
        return (
            <div className="px-2">
                <div className="heading text-xl mb-3">
                    Your Address
                </div>
                <Address />
            </div>
        )
    }
}


export default AddressPage