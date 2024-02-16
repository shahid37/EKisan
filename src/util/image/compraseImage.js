
import { storage } from '@/firebase';
import { imgExtRemover } from '@/util/name/imgExtRemover';
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
const compraseImage = ({ productImage, TIMESTAMP }) => {
    return new Promise(async (resolve) => {
        const rawImageRef = ref(storage, `test/${TIMESTAMP}.${imgExtRemover(productImage.name)}`)
        await uploadBytes(rawImageRef, productImage)
        const uploadedImgUrl = await getDownloadURL(rawImageRef)
        const apiResponse = await fetch("http://localhost:5000/api/comprase", {
            headers: {
                "url": uploadedImgUrl,
                "timestamp": TIMESTAMP,
            }
        })
        await deleteObject(rawImageRef)

        // const processedImageJSON = await apiResponse.json()
        const processedImageRef = ref(storage, `items/${TIMESTAMP}.jpg`)
        resolve(await getDownloadURL(processedImageRef))
    })
}

export default compraseImage