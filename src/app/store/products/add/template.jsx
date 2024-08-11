"use client"
import { AuthContext } from '@/providers/AuthProviser'
import React, { useContext } from 'react'

const Template = ({ children }) => {
    const { user } = useContext(AuthContext)
    if (!user) { return null }
    else { return children }
}

export default Template