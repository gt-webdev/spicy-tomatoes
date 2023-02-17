/**
 * dao.js
 * Database Access Object module to abstract interactions with a remotely hosted Firebase database
 */

// import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore, getDocs, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

// your web app's Firebase configuration
// for Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD3eTUUl26RRSTOC0hJV8FLib2TWu-ryg8",
    authDomain: "spicy-tomatoes.firebaseapp.com",
    projectId: "spicy-tomatoes",
    storageBucket: "spicy-tomatoes.appspot.com",
    messagingSenderId: "232816015231",
    appId: "1:232816015231:web:68bfb35c0186f62b75cc4a",
    measurementId: "G-SC74NZ17S4"
};

// initialize Firebase
const app = initializeApp(firebaseConfig);

// reference to Firebase cloud firestore database
const db = getFirestore(app);

/**
 * Method to get documents from a collection in Firebase Cloud Firestore
 * @param {string} collectionName name of collection in database
 * @returns list of documents in a collection
 */
export const getDocsFromCollection = (collectionName) => {
    return getDocs(collection(db, collectionName));
};

/**
 * Method to add a document to a collection in Firebase Cloud Firestore
 * @param {object} documentData data of document to add to database
 * @param {string} collectionName name of collection in database
 * @retruns promose to handle when database update is complete
 */
export const addDocToCollection = (documentData, collectionName) => {
    return addDoc(collection(db, collectionName), documentData);
};
