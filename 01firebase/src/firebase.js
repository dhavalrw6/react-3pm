import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCsalyfkDrhY0VwsP3jUgRrK0fUrts_qK8",
    authDomain: "my-firebase02.firebaseapp.com",
    projectId: "my-firebase02",
    storageBucket: "my-firebase02.appspot.com",
    messagingSenderId: "903764324836",
    appId: "1:903764324836:web:012a9c22f2a9cec98357f1",
    databaseURL: "https://my-firebase02-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

export const app = initializeApp(firebaseConfig);