import { database } from '@/firebase';
import { get, onValue, ref } from 'firebase/database';
import { incGST } from '../calc/gst';

const fetchProductData = (id) => {
    return new Promise(async (resolve) => {
        const itemsRef = ref(database, `items/${id}`);
        onValue(itemsRef, (snapShot => {
            const snapVal = snapShot.val();

            resolve(
                {
                    ...snapVal,
                    price: incGST(snapVal.price)
                }
            );
        }));

    });
};

export default fetchProductData;
