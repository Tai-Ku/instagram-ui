// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore/lite";

// import "firebase/firestore";
// import "firebase/auth";
// import { seedDatabase } from "../sedd";

// const config = {
//   apiKey: "AIzaSyCWWSamNLGJaeeF-amdS3ZqK0PMQaHB7Zs",
//   authDomain: "instagram-ui-a70ab.firebaseapp.com",
//   projectId: "instagram-ui-a70ab",
//   storageBucket: "instagram-ui-a70ab.appspot.com",
//   messagingSenderId: "341537259365",
//   appId: "1:341537259365:web:1eef1dd079cfc318212b8c",
// };
// const firebase = initializeApp(config);
// seedDatabase(firebase);
// const { FieldValue } = getFirestore();

// export { firebase, FieldValue };
import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../sedd";
const config = {
  apiKey: "AIzaSyCWWSamNLGJaeeF-amdS3ZqK0PMQaHB7Zs",
  authDomain: "instagram-ui-a70ab.firebaseapp.com",
  projectId: "instagram-ui-a70ab",
  storageBucket: "instagram-ui-a70ab.appspot.com",
  messagingSenderId: "341537259365",
  appId: "1:341537259365:web:1eef1dd079cfc318212b8c",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;
// seedDatabase(firebase);
export { firebase, FieldValue };
