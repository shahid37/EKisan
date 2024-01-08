import { ref, onValue } from 'firebase/database';
import { database } from '@/firebase';
import { incGST } from '../calc/gst';
const fetchCategories = ({ sortType = "newest", limit = null, productList = null }) => {
    const itemsRef = ref(database, 'categories/');

    return new Promise(resolve => {
        onValue(itemsRef, (snapshot) => {
            const snapVal = snapshot.val();
            var rawItemsList = [];
            for (const id in snapVal) {
                rawItemsList.push({ ...snapVal[id], id });
            }
            if (sortType == "productCount") {
                rawItemsList = sortCategoryByProductCount(productList, rawItemsList)
            }
            limit = limit ? limit : rawItemsList.length - 1
            resolve(rawItemsList)
        });
    })
}

const sortCategoryByProductCount = (productList, categories) => {
    function QuantityTotaler(categoryName) {
        const filteredArray = productList.filter((x) => {
            return x.category === categoryName
        })


        return filteredArray.length

    }
    const sortedArr = [];
    categories.map((item) => {
        const productCount = QuantityTotaler(item.categorieName)
        if (productCount > 0) {
            sortedArr.push({ ...item, productCount })
        }
    })
    return sortedArr.sort((a, b) => b.productCount - a.productCount)
}

export default fetchCategories