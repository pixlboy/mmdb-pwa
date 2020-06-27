//requiring path and fs modules
const firebase = require('firebase');
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'mmdb.json');

// Your web app's Firebase configuration
let firebaseConfig = {
    apiKey: "AIzaSyD8BBOiAz31y6JNjOJASFVs6aRgdNaKYIg",
    authDomain: "rg-mmdb.firebaseapp.com",
    databaseURL: "https://rg-mmdb.firebaseio.com",
    projectId: "rg-mmdb",
    storageBucket: "rg-mmdb.appspot.com",
    messagingSenderId: "324131263247",
    appId: "1:324131263247:web:d5be2047b06ef31123a47a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

  function getData(){
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    uploadData(data);
  }

  function uploadData(data){
    data.forEach((obj) => {
        db.collection("movies").add(obj).then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    });
  }

  getData();