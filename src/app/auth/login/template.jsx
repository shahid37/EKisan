"use client"
import AuthGuard from "@/components/auth/AuthGuard"
import { AuthProvider } from "@/providers/AuthProviser"
export default function Template({ children }) {
    return (
        <AuthProvider>
            <AuthGuard allowAuth={false}>{children}</AuthGuard>
        </AuthProvider>
    )
}