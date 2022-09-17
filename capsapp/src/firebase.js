import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app=firebase.initializeApp({
    apiKey: "AIzaSyCFEO7ZHc7EVeW4p6eQ7ibLcLur53nhxCs",
    authDomain: "capstone-109.firebaseapp.com",
    projectId: "capstone-109",
    storageBucket: "capstone-109.appspot.com",
    messagingSenderId: "690904015017",
    appId: "1:690904015017:web:65821527ed1902279089b8"  
})

export const auth = app.auth()
export default app