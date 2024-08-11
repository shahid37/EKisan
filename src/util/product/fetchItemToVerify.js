import { ref, onValue } from 'firebase/database';
import { database } from '@/firebase';
import { incGST } from '../calc/gst';
const fetchItemToVerify = (uid) => {
    const itemsRef = ref(database, 'item-to-verify');
    return new Promise(resolve => {
        onValue(itemsRef, (snapshot) => {
            const snapVal = snapshot.val();
            const rawItemsList = [];
            for (const id in snapVal) {
                const currentItem = snapVal[id];
                const newObj = {
                    ...currentItem,
                    price: incGST(currentItem),
                };
                if (currentItem.sellerUID === uid) { rawItemsList.push({ ...newObj, id }); }
            }
            resolve(rawItemsList)
        });
    })
}

export default fetchItemToVerify