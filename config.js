import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDkUArGusqUjd_tQSCDe3SLrIkGwmefIt8",
  authDomain: "prueba-app-historias.firebaseapp.com",
  databaseURL: "https://prueba-app-historias-default-rtdb.firebaseio.com",
  projectId: "prueba-app-historias",
  storageBucket: "prueba-app-historias.appspot.com",
  messagingSenderId: "1014861245627",
  appId: "1:1014861245627:web:7769aa84ea474f73828d9e"
};

if(!firebase.apps.lenght){
  firebase.initializeApp(firebaseConfig);
}
export default firebase.database();