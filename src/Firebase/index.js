import firebase from 'firebase/app'
import '@firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAvMEWhqN5QR5E27gXK_KzOcLoqXLjmjNE",
    authDomain: "recipe-collector-7c18c.firebaseapp.com",
    databaseURL: "https://recipe-collector-7c18c.firebaseio.com",
    projectId: "recipe-collector-7c18c",
    storageBucket: "recipe-collector-7c18c.appspot.com",
    messagingSenderId: "583426136012",
    appId: "1:583426136012:web:9a1a1ae98f57fd8e3aaf69",
    measurementId: "G-HDWBR0C9RM"
  };

  firebase.initializeApp(firebaseConfig)

  const storage = firebase.storage();

  export {
      storage, firebase as default 
  }