"use client"

import Orders from '@/components/account/tabs/Orders'
import { AuthContext } from '@/providers/AuthProviser'
import React, { useContext } from 'react'

const Page = () => {
    const { user } = useContext(AuthContext)
    if (!user) {
        return null
    }
    else {
        return (
            <div className="px-2">
                <Orders />
            </div>
        )
    }
}

export default Page