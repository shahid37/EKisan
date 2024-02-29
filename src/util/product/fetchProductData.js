import { database } from '@/firebase';
import { get, onValue, ref } from 'firebase/database';
import { incGST } from '../calc/gst';

const fetchProductData = (id) => {
    return new Promise(async (resolve) => {
        const itemsRef = ref(database, `items/${id}`);
        onValue(itemsRef, (snapShot => {
            const snapVal = snapShot.val();
            if (snapVal) {
                resolve(
                    {
                        ...snapVal,
                        price: incGST(snapVal),
                        id: id
                    }
                );
            }
            else {
                resolve(undefined)
            }
        }));

    });
};

export default fetchProductData;
