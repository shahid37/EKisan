"use client"
import AuthGuard from "@/components/auth/AuthGuard"
import { AuthProvider } from "@/providers/AuthProviser"
export default function Template({ children }) {
    return (
        <AuthProvider>
            <AuthGuard allowRegistred={true} corporateOnly={true}>{children}</AuthGuard>
        </AuthProvider>
    )
}