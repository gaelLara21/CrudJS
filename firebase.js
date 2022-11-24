  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc, updateDoc} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBcW94CbM-pkNeoJOQy1r-P_J5y43EFYi8",
    authDomain: "fir-javascript-crud-9ba5b.firebaseapp.com",
    projectId: "fir-javascript-crud-9ba5b",
    storageBucket: "fir-javascript-crud-9ba5b.appspot.com",
    messagingSenderId: "181246540954",
    appId: "1:181246540954:web:18f63634f6a749d5adb323"
  };

  // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    const db = getFirestore();

    export const saveTask = (title, description) =>
    addDoc(collection(db, "tasks"), {title, description });

    export const getTasks = () => getDocs(collection(db, 'tasks'));

    export const onGetTasks = (callback) => onSnapshot(collection(db, 'tasks'), callback);

    