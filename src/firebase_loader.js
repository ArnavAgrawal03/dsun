import { initializeApp } from "firebase/app";
// import { getAnalytics } from "Firebase/analytics";
import { getAuth } from "firebase/auth";
import { collection, doc, getFirestore } from "firebase/firestore/lite";

const FirebaseConfig = {
    apiKey: "AIzaSyB7PJq1qrZqfcdemLPdtcHr9uL76oguzeU",
    authDomain: "dsun-svelte.firebaseapp.com",
    projectId: "dsun-svelte",
    storageBucket: "dsun-svelte.appspot.com",
    messagingSenderId: "67166864820",
    appId: "1:67166864820:web:c539b1751c1447cd635ee1",
    measurementId: "G-M1P8Y3KY0S"
};

let app = initializeApp(FirebaseConfig);
const auth = getAuth(app);
let db = getFirestore(app);
// @ts-ignore
const userDoc = (userId) => doc(db, "users", userId)
export {
    auth,
    userDoc
}

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

