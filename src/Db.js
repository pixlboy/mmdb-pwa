import 'firebase/firestore';
import firebase from './Firebase';

const Db = firebase.firestore();

// enable offline data
Db.enablePersistence()
.catch(function(err) {
  if (err.code === 'failed-precondition') {
    // probably multible tabs open at once
    console.log('persistance failed');
  } else if (err.code === 'unimplemented') {
    // lack of browser support for the feature
    console.log('persistance not available');
  }
});

export default Db;