/**
 * dao.js
 * Database access object module to abstract interactions with a remotely hosted Firebase database
 */

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD3eTUUl26RRSTOC0hJV8FLib2TWu-ryg8",
    authDomain: "spicy-tomatoes.firebaseapp.com",
    projectId: "spicy-tomatoes",
    storageBucket: "spicy-tomatoes.appspot.com",
    messagingSenderId: "232816015231",
    appId: "1:232816015231:web:68bfb35c0186f62b75cc4a",
    measurementId: "G-SC74NZ17S4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
