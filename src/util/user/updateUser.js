import { database } from "@/firebase";
import { ref, set } from "firebase/database";
const updateUser = ({ data, user }) => {
    return new Promise(resolve => {
        try {
            const userRef = ref(database, `users/${user.uid}`)
            set(userRef, {
                ...data, phone: user.phone, lastUpdate: Date.now(), uid: null
            }).then(() => {
                resolve(true)
            })
        }
        catch (e) {
            throw Error(e)
        }
    })
}
export default updateUser