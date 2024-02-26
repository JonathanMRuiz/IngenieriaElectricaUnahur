import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Importa el módulo de Firestore
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDqiqJGqYFUzCwZk2kKXeR2sC3FZzFHXi4",
  authDomain: "unahur-2096d.firebaseapp.com",
  projectId: "unahur-2096d",
  storageBucket: "unahur-2096d.appspot.com",
  messagingSenderId: "146441844150",
  appId: "1:146441844150:web:767e9816d949bfa929bd17",
};

// Inicializar Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp); // Inicializa Firestore y obtén una referencia a la base de datos
const storage = getStorage();
export { auth, db, storage };
