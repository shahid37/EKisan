import { database } from "@/firebase";
import { ref, set } from "firebase/database";
import Swal from "sweetalert2"
const editCorporateProfile = ({ data, user }) => {

    return new Promise(resolve => {
        try {
            const userRef = ref(database, `users/${user.uid}/corporateData`)
            set(userRef, {
                ...data, lastUpdate: Date.now()
            }).then(() => {
                Swal.fire("Your seller profile is updated", "", "success")
                resolve(true)
            })
        }
        catch (e) {
            throw Error(e)
        }
    })

}

export default editCorporateProfile