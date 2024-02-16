import { database } from '@/firebase';
import compraseImage from '@/util/image/compraseImage';
import { push, ref } from 'firebase/database';
import Swal from "sweetalert2";
const sendItemToVerification = async ({ itemData = {}, productImage = [], user = {} }) => {
    return new Promise(async resolve => {
        const TIMESTAMP = Date.now()
        const imageUrl = await compraseImage({ TIMESTAMP: TIMESTAMP, productImage: productImage })
        const verificationRef = ref(database, "item-to-verify")
        const sellerName = user.userType === "corporate" ? user.corporateData.name : user.name
        await push(verificationRef, {
            ...itemData,
            imgUrl: imageUrl,
            sellerUID: user.uid,
            timeStamp: TIMESTAMP,
            block: user.block ? user.block : null,
            district: user.district,
            state: user.state,
            sellerName: sellerName,
            userType: user.userType
        })
        resolve(true)
    })
}

export default sendItemToVerification