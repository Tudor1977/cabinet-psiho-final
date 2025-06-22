
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

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

const container = document.getElementById("articole");

const afiseazaArticole = async () => {
  const querySnapshot = await getDocs(collection(db, "articole"));
  querySnapshot.forEach((doc) => {
    const articol = doc.data();
    const div = document.createElement("div");
    div.innerHTML = `
      <h2>${articol.titlu}</h2>
      <p><em>${articol.eticheta} - ${articol.data}</em></p>
      ${articol.imagine ? `<img src="${articol.imagine}" width="300"/>` : ""}
      <p>${articol.continut}</p>
      <hr/>
    `;
    container.appendChild(div);
  });
};

afiseazaArticole();
