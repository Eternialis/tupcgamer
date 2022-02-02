import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDogpllxODZsafPGNzEG1nCEn5KVSOEo_k",
    authDomain: "tupcgamer-3e6fe.firebaseapp.com",
    projectId: "tupcgamer-3e6fe",
    storageBucket: "tupcgamer-3e6fe.appspot.com",
    messagingSenderId: "561482254343",
    appId: "1:561482254343:web:0d9f60aac781844d4c82a2"
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
export const itemCollection = collection(database, "productos")
export const coleccionOrdenes = collection(database, "ordenes")
export const usersCollection = collection(database, "usuarios")