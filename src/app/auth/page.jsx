"use client"
import AuthGuard from "@/components/auth/AuthGuard"
import { AuthProvider } from "@/providers/AuthProviser"
import Link from "next/link"
export default function Page() {
  return (
    <AuthProvider>
      <Auth />
    </AuthProvider>
  )
}
function Auth() {
  return (
    <AuthGuard allowAuth={false}>
      <div className="container auth">

        <div className="image">
          <img src="/images/loginimg.webp" alt="" />
        </div>

        <div className="message heading">
          <h3>Buy & Sell <span>Argo</span> Products with <span>Zero Commisson</span></h3>
        </div>

        <div className="action">
          <Link href="/auth/login">
            <button className="button w-[100%]">Login</button>
          </Link>
          <button className="button w-[100%] outlined">Register</button>

        </div>
      </div>
    </AuthGuard>
  )
}