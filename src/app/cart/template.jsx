"use client"
import AuthGuard from "@/components/auth/AuthGuard"
import { AuthProvider } from "@/providers/AuthProviser"
export default function Template({ children }) {
    return (
        <AuthProvider>
            <AuthGuard>{children}</AuthGuard>
        </AuthProvider>
    )
}