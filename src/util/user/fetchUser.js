import { database } from '@/firebase';
import { onValue, ref } from 'firebase/database';
const fetchUser = ({ userId }) => {
    console.log(userId)

    const userRef = ref(database, `users/${userId}`);
    return new Promise(resolve => {
        onValue(userRef, (snapshot) => {
            const snapVal = snapshot.val();
            resolve({ ...snapVal, uid: userId })

        });
    })
}

export default fetchUser