import { database } from "@/firebase";
import { ref, set } from "firebase/database";
const createFramerProfile = ({ data, user }) => {

    return new Promise(resolve => {
        try {
            const userRef = ref(database, `users/${user.uid}/farmerData`)
            set(userRef, {
                ...data, timeStamp: Date.now(), lastUpdate: Date.now()
            }).then(() => {
                location.replace("/store")
                resolve(true)
            })
        }
        catch (e) {
            throw Error(e)
        }
    })

}

export default createFramerProfile