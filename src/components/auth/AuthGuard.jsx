"use client"
import { useContext } from "react";
import Layout from "../common/Layout";
import { AuthContext } from "@/providers/AuthProviser";
const AuthGuard = ({ children, allowAuth = true, allowRegistred = false, allowSeller = false, farmerOnly = false, corporateOnly=false }) => {
    const { user } = useContext(AuthContext)
    if (user === undefined) { // loading
        return null
    } else {
        if (allowAuth && allowRegistred) { //registerd
            if (farmerOnly) {
                if (user.userType == "farmer") {
                    return <Layout>
                        {children}
                    </Layout>
                }
                else {
                    location.replace("/")
                    return null
                }
            }
            if (corporateOnly) {
                if (user.userType == "corporate") {
                    return <Layout>
                        {children}
                    </Layout>
                }
                else {
                    location.replace("/")
                    return null
                }
            }
            if (allowSeller) { //if seller
                if (user?.farmerData || user?.corporateData) {
                    return <Layout>
                        {children}
                    </Layout>
                }
                else {
                    location.replace("/")
                    return null
                }
            }
            if (!user) { //if not loged in
                location.replace("/auth/")
                return null
            } else { // if loged in
                if (user?.name) { // if registerd
                    return (
                        <Layout>
                            {children}
                        </Layout>
                    )
                }
                else {//if not registerd
                    location.replace("/auth/register")
                    return null
                }
            }
        }
        if (allowAuth && !allowRegistred) {
            if (!user?.name) {
                location.replace("/auth")
                return null
                // return <Layout>
                //     {children}
                // </Layout>
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