// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc, doc, setDoc, getDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZV9pwhBk4KX8snknZTN_r4VcATjY7tMQ",
    authDomain: "devathon-f92ae.firebaseapp.com",
    projectId: "devathon-f92ae",
    storageBucket: "devathon-f92ae.appspot.com",
    messagingSenderId: "503348269743",
    appId: "1:503348269743:web:95d7024c0039c035607a5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const blogCollection = collection(db, 'blogs')
const storage = getStorage(app)

export {
    app,
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    db,
    addDoc,
    doc,
    setDoc,
    getDoc,
    collection,
    signOut,
    blogCollection,
    storage,
}