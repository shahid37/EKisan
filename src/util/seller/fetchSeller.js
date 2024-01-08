import { database } from '@/firebase';
import { onValue, ref } from 'firebase/database';
import stateShortForm from '../name/stateShortForm';
import productLocation from '../name/productLocation';
const fetchSeller = ({ sellerId }) => {
    const itemsRef = ref(database, `users/${sellerId}`);
    return new Promise(resolve => {
        onValue(itemsRef, (snapshot) => {
            const snapVal = snapshot.val();
            const sellerData = {
                location: productLocation({ product: snapVal, short: false }),
                name: snapVal.userType == "corporate" ? snapVal.corporateData.name
                    : snapVal.name,
                id: sellerId,
                userType: snapVal.userType
            }
            resolve(sellerData)
        });
    })
}

export default fetchSeller