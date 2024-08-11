"use client"
import AuthGuard from "@/components/auth/AuthGuard"
import { AuthContext, AuthProvider } from "@/providers/AuthProviser"
import Link from "next/link"
import { useContext } from 'react'
export default function Template({ children }) {
    return (
        <AuthProvider>
            <AuthGuard><Cart>{children}</Cart></AuthGuard>
        </AuthProvider>
    )
}
const Cart = ({ children }) => {
    const { user } = useContext(AuthContext)
    if (user) {
        return children
    }
    else {
        return (<div className="flex flex-col items-center justify-center h-[80vh]">
            <img className="w-64 h-auto mb-4" src="/images/placeholders/emptyCart.svg" alt="empty cart" />
            <h3 className="text-lg font-semibold">Missing items in your cart</h3>
            <p>Login to see the items you added previously</p>
            <Link href="/auth">
                <button className="button rounded">
                    Login/Signup
                </button>
            </Link>
        </div>)
    }
}