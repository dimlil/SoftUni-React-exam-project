import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCdX5p3Okoln75lPHcGXaeXzJsahPktMBI",
    authDomain: "softuni-react-exam.firebaseapp.com",
    databaseURL: "https://softuni-react-exam.firebaseio.com",
    projectId: "softuni-react-exam",
    storageBucket: "softuni-react-exam.appspot.com",
    messagingSenderId: "433270180894",
    appId: "1:433270180894:web:18c72e8f815ee45948f20f",
    measurementId: "G-TLFBRS8KHM"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebaseApp.auth();
  const storage=firebaseApp.storage();

export {db,auth,storage}  