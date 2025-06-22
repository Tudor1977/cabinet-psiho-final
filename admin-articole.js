
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD9-J7aOVgqBszOkbS5xxEavYaK8FRUykU",
  authDomain: "cabinet-psihologic-4666e.firebaseapp.com",
  projectId: "cabinet-psihologic-4666e",
  storageBucket: "cabinet-psihologic-4666e.appspot.com",
  messagingSenderId: "15859175356",
  appId: "1:15859175356:web:556e3e72f299e32fc3a04c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.publicaArticol = async () => {
  const titlu = document.getElementById("titlu").value;
  const continut = document.getElementById("continut").value;
  const eticheta = document.getElementById("eticheta").value;
  const imagine = document.getElementById("imagine").value;
  const data = document.getElementById("data").value;

  try {
    await addDoc(collection(db, "articole"), {
      titlu, continut, eticheta, imagine, data
    });
    alert("Articol publicat cu succes!");
  } catch (e) {
    alert("Eroare la publicare: " + e);
  }
};
