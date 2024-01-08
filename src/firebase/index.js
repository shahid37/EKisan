import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCpjiGCC4mz8CPYglB17eR_drLHmSHqxYQ",
    authDomain: "kisaandarshan-test.firebaseapp.com",
    databaseURL: "https://kisaandarshan-test-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "kisaandarshan-test",
    storageBucket: "kisaandarshan-test.appspot.com",
    messagingSenderId: "109364081834",
    appId: "1:109364081834:web:81b45f841bb7e360bb8cd3",
    measurementId: "G-J1088K5VP1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const auth = getAuth(app)
export { database, auth }