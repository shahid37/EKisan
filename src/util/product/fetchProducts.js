import { ref, onValue } from 'firebase/database';
import { database } from '@/firebase';
import { incGST } from '../calc/gst';
const fetchProducts = ({sortType="newest", limit=null}) => {
    const itemsRef = ref(database, 'items/');

    return new Promise(resolve=>{
        onValue(itemsRef, (snapshot) => {
            const snapVal = snapshot.val();
            const rawItemsList = [];
            for (const id in snapVal) {
                const currentItem = snapVal[id];
                const newObj = {
                    ...currentItem,
                    price: incGST(currentItem.price),
                };
                rawItemsList.push({ ...newObj, id });
            }
            if(sortType=="newest"){
                rawItemsList.sort((a,b)=>b.timeStamp-a.timeStamp)
            }
            limit = limit?limit:rawItemsList.length-1
            resolve(rawItemsList.splice(0, limit))
        });
    })
}

export default fetchProducts