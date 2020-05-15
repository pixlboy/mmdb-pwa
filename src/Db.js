import firebase from './Firebase';
import 'firebase/firestore';

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

// // add new recipe
// // const form = document.querySelector('form');
// // form.addEventListener('submit', evt => {
// //   evt.preventDefault();
  
// //   const recipe = {
// //     name: form.title.value,
// //     ingredients: form.ingredients.value
// //   };

// //   db.collection('recipes').add(recipe)
// //     .catch(err => console.log(err));

// //   form.title.value = '';
// //   form.ingredients.value = '';
// // });

// // // remove a recipe
// // const recipeContainer = document.querySelector('.recipes');
// // recipeContainer.addEventListener('click', evt => {
// //   if(evt.target.tagName === 'I'){
// //     const id = evt.target.getAttribute('data-id');
// //     //console.log(id);
// //     db.collection('recipes').doc(id).delete();
// //   }
// // })