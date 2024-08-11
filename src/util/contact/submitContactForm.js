import { database } from "@/firebase";
import { ref, push } from "firebase/database";
const submitContactData = ({ data }) => {

    return new Promise(resolve => {
        try {
            const userRef = ref(database, `/contactMail`)
            push(userRef, {
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

export default submitContactData