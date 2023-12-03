import {deleteApp, getApps, initializeApp, getApp} from 'firebase/app';
import {getAuth, setPersistence, inMemoryPersistence} from 'firebase/auth';

const FirebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID
};

let firebaseApp;
if (!getApps().length){
    firebaseApp = initializeApp(FirebaseConfig);
} else {
    firebaseApp = getApp();
    deleteApp(firebaseApp)
    firebaseApp = initializeApp(FirebaseConfig);
}

export const auth = getAuth(firebaseApp);