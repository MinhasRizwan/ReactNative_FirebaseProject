import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
	apiKey: "AIzaSyCH3mPuM5WBZPt9WMg_lo2KoYmXDobIE7E",
	authDomain: "rn-firebaseauthproject.firebaseapp.com",
	databaseURL: "https://rn-firebaseauthproject.firebaseio.com",
	storageBucket: "rn-firebaseauthproject.appspot.com",
	projectId: "rn-firebaseauthproject"
  };
// const firebaseConfig = {
// 	apiKey: API_KEY,
// 	authDomain: AUTH_DOMAIN,
// 	databaseURL: DATABASE_URL,
// 	projectId: PROJECT_ID,
// 	storageBucket: '',
// 	messagingSenderId: MESSAGE_SENDER_ID,
// 	appId: APP_ID
// }

// Initialize Firebase
let Firebase = firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()

// avoid deprecated warnings
db.settings({
	timestampsInSnapshots: true
})

export default Firebase
