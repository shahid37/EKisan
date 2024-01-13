import { database } from "@/firebase";
import { ref, set } from "firebase/database";
const registerUser = ({ data, user }) => {
    return new Promise(resolve => {
        try {
            const userRef = ref(database, `users/${user.uid}`)
            set(userRef, {
                ...data, phone: user.phone, timeStamp: Date.now()
            }).then(() => {
                resolve(true)
            })
        }
        catch (e) {
            throw Error(e)
        }
    })
}
export default registerUser