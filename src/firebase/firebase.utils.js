import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";



const config ={
    apiKey: "AIzaSyDgPK9t4PlRXb0t-4p1SWRIhc_O29pOmEU",
    authDomain: "ecom-crown-db.firebaseapp.com",
    databaseURL: "https://ecom-crown-db.firebaseio.com",
    projectId: "ecom-crown-db",
    storageBucket: "ecom-crown-db.appspot.com",
    messagingSenderId: "230617315749",
    appId: "1:230617315749:web:2693a12b8279f21e98504c",
    measurementId: "G-7SZQMEN68Z"

}
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore()


export const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt:'select_account'});

export const SignInWithGoogle = () => auth.signInWithPopup(provider)
export default firebase;