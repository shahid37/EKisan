"use client"
import { useContext } from "react";
import Layout from "../common/Layout";
import { AuthContext } from "@/providers/AuthProviser";
const AuthGuard = ({ children, allowAuth = true, allowRegistred = false }) => {
    const { user } = useContext(AuthContext)
    if (user === undefined) {
        return null
    } else {
        if (allowAuth && allowRegistred) {
            if (!user) {
                location.replace("/auth/")
                return null
            } else {
                if (user?.name) {
                    return (
                        <Layout>
                            {children}
                        </Layout>
                    )
                }
                else {
                    location.replace("/auth/register")
                    return null
                }
            }
        }
        if (allowAuth && !allowRegistred) {
            if (!user?.name) {
                // location.replace("/auth")
                // return null
                return <Layout>
                    {children}
                </Layout>
            }
            else {
                return (
                    <Layout>
                        {children}
                    </Layout>
                )
            }
        }
        if (allowAuth) {
            if (user == null) {
                location.replace("/auth")
                return null
            }
            else {
                return (
                    <Layout>
                        {children}
                    </Layout>
                )
            }
        }
        //registerd
        //all arrguments are false
        else {
            if (user?.name) {
                location.replace("/")
                return null
            }
            else {
                return (
                    <Layout>
                        {children}
                    </Layout>
                )
            }
        }


    }
}


export default AuthGuard