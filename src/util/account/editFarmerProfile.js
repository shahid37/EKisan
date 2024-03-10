import { database } from "@/firebase";
import { ref, set } from "firebase/database";
const editFarmerProfile = ({ data, user }) => {

    return new Promise(resolve => {
        try {
            const userRef = ref(database, `users/${user.uid}/farmerData`)
            set(userRef, {
                ...data, lastUpdate: Date.now(), timestamp: user.farmerData.timeStamp
            }).then(() => {
                resolve(true)
            })
        }
        catch (e) {
            throw Error(e)
        }
    })

}

export default editFarmerProfile