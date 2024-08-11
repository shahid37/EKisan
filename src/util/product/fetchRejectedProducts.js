import { database } from '@/firebase';
import { onValue, ref } from 'firebase/database';
const fetchRejectedProducts = (uid) => {
    const itemsRef = ref(database, `/users/${uid}/item_rejected`);
    return new Promise(resolve => {
        onValue(itemsRef, (snapshot) => {
            const snapVal = snapshot.val();
            const rawItemsList = [];
            for (const id in snapVal) {
                const currentItem = snapVal[id];
                rawItemsList.push({ ...currentItem, id });
            }
            resolve(rawItemsList)
        });
    })

}

export default fetchRejectedProducts