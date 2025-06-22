
// Importă Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// Config Firebase (deja introdus anterior)
const firebaseConfig = {
  apiKey: "AIzaSyCfbAkVeCL2k4uBlD0JvCWkHwgcE4vvOas",
  authDomain: "site-cabinet.firebaseapp.com",
  projectId: "cabinet-psihologic-4666e",
  storageBucket: "cabinet-psihologic-4666e.appspot.com",
  messagingSenderId: "1004250457061",
  appId: "1:1004250457061:web:10b5c0f4c69d3d53f0a709"
};

// Inițializare Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Funcția de publicare articol
window.publicaArticol = async function () {
  const titlu = document.getElementById("titlu").value;
  const continut = document.getElementById("continut").value;
  const eticheta = document.getElementById("eticheta").value;
  const imagine = document.getElementById("imagine").value;
  const data = document.getElementById("data").value;

  try {
    await addDoc(collection(db, "articole"), {
      titlu,
      continut,
      eticheta,
      imagine,
      data
    });
    alert("Articol publicat cu succes!");
  } catch (e) {
    alert("Eroare la publicare: " + e.message);
  }
};
