
import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCE-w9cgQp-sjxVncvthGCRLatmpeoKb6w",
    authDomain: "asilo-react-5103e.firebaseapp.com",
    databaseURL: "https://asilo-react-5103e-default-rtdb.firebaseio.com",
    projectId: "asilo-react-5103e",
    storageBucket: "asilo-react-5103e.appspot.com",
    messagingSenderId: "375338075950",
    appId: "1:375338075950:web:dbb95670b405e044f49cbf",
    measurementId: "G-SFGK1K5Y8V"
    };

firebase.initializeApp(firebaseConfig)
export default {
    firebase
}