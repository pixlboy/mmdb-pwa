import firebase from './config';

const firestore = firebase.firestore();
const storage = firebase.storage();

// enable offline data
firestore.enablePersistence()
.catch((err) => {
  if (err.code === 'failed-precondition') {
    // probably multible tabs open at once
    console.log('persistance failed');
  } else if (err.code === 'unimplemented') {
    // lack of browser support for the feature
    console.log('persistance not available');
  }
});

export {firestore, storage};