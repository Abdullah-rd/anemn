

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDiGa30KlEXZxRxl7s5IKDXlit1CKCRNQw",
    authDomain: "redwa-f8257.firebaseapp.com",
    databaseURL: "https://redwa-f8257-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "redwa-f8257",
    storageBucket: "redwa-f8257.appspot.com",
    messagingSenderId: "217964445297",
    appId: "1:217964445297:web:b84ccef4b3e7ec89f365d0",
    measurementId: "G-6RCXDH5QDS"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  
  import { getDatabase, set, get, update, remove, ref, child }
  from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
  



  const db = getDatabase();

  set(ref(db, "Conseilleur service Offre"), {
      Id: "Of4213"
  })
  .then(() => {
      console.log("Default value set for Conseilleur service Offre");
  })
  .catch((error) => {
      console.error("Error setting default value for Conseilleur service Offre:", error);
  });
  
  set(ref(db, "Conseilleur service Demandeur"), {
      Id: "D4213"
  })
  .then(() => {
      console.log("Default value set for Conseilleur service Demandeur");
  })
  .catch((error) => {
      console.error("Error setting default value for Conseilleur service Demandeur:", error);
  });
