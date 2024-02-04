import { ref, onValue } from 'firebase/database';
import { database } from '@/firebase';
import { incGST } from '../calc/gst';
const fetchProducts = ({ sortType = "newest", limit = null, search = null }) => {
    const itemsRef = ref(database, 'items/');

    return new Promise(resolve => {
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
            if (search) {
                const searchQuery = search
                const newItem = rawItemsList.filter((item) => {
                    const name = item.name.toLowerCase()
                    const seller = item.sellerName.toLowerCase()
                    const category = item.category.toLowerCase()
                    return name.includes(searchQuery) || seller.includes(searchQuery) || category.includes(searchQuery)
                })
                resolve(newItem)

            }
            if (sortType == "newest") {
                rawItemsList.sort((a, b) => b.timeStamp - a.timeStamp)
            }
            limit = limit ? limit : rawItemsList.length - 1
            resolve(rawItemsList.splice(0, limit))
        });
    })
}

export default fetchProducts