"use client"
import { auth } from '@/firebase'
import { signOut } from 'firebase/auth'

import React, { useEffect } from 'react'

const Page = () => {
    useEffect(
        () => {
            signOut(auth).then(()=>{
                location.replace("/auth")
            })
        }, [])
    return (
        <div>Page</div>
    )
}

export default Page