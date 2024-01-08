import { database } from "@/firebase";
import { ref, set } from "firebase/database";
const registerUser = ({ data, uid }) => {
    return new Promise(resolve => {
        try {
            const userRef = ref(database, `users/${uid}`)
            set(userRef, {
                ...data, timeStamp: Date.now()
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