"use client"
import AuthGuard from "@/components/auth/AuthGuard"
import { AuthContext, AuthProvider } from "@/providers/AuthProviser"
import { useContext } from "react"
export default function Template({ children }) {
    return (
        <AuthProvider>
            <AuthGuard allowRegistred={true}>
                <Notification>
                    {children}
                </Notification>
            </AuthGuard>
        </AuthProvider>
    )
}
const Notification = ({ children }) => {
    const { user } = useContext(AuthContext)
    if (user) {
        return children
    }
}
