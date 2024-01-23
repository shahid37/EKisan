import React, { createContext, useEffect, useState } from "react";
import { auth, database } from "@/firebase"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { onValue, ref, set } from "firebase/database";
import fetchUser from "@/util/user/fetchUser";
export const AuthContext = createContext()
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(undefined)
    useEffect(() => {
        auth.authStateReady().then(async () => {
            if (!auth.currentUser) {
                setUser(null)
                return;
            }
            const userData = await fetchUser({ user: auth.currentUser })
            setUser(userData)

        })

    }, []);
    return (
        <AuthContext.Provider
            value={{
                setUser,
                user,
                logout: async () => {
                    try {
                        await signOut(auth)
                        setUser(null)
                    }
                    catch (e) {
                        console.error(e);
                    }
                },
                updateName: (name, setInputDailogOpen) => {
                    const userRef = ref(database, `/users/${user.uid}/displayName`)
                    set(userRef, name).then(() => {
                        setInputDailogOpen(false)
                        setUser({
                            ...user,
                            displayName: name,
                        })
                        if (Platform.OS === "android") {
                            alert("You name has been updated")
                        }
                    })
                        .catch((e) => {
                            console.error(e)
                        })
                },
                fetchUser: () => {
                    return new Promise(resolve => {
                        const userRef = ref(database, `/users/${user.uid}`)
                        onValue(userRef, (snapshot) => {
                            var userData = snapshot.val()
                            var watchListObj = userData.watchList;
                            var watchList = []
                            for (let pair in watchListObj) {
                                watchList.push({
                                    ...watchListObj[pair],
                                    pair
                                })
                            }
                            resolve({ ...userData, watchList, uid: user.uid })
                        })
                    })
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}