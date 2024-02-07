"use client"
import AuthGuard from "@/components/auth/AuthGuard"
import { AuthProvider } from "@/providers/AuthProviser"
export default function Template({ children }) {
    return (
        <AuthProvider>
            <AuthGuard allowSeller={true} allowRegistred={true}>{children}</AuthGuard>
        </AuthProvider>
    )
}