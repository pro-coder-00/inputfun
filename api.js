 const firebaseConfig = {
    apiKey: "AIzaSyB5YEsXBZAXEqY6jM0rvMfyestAjd0BLlA",
    authDomain: "inputfun.firebaseapp.com",
    projectId: "inputfun",
    storageBucket: "inputfun.firebasestorage.app",
    messagingSenderId: "736114095377",
    appId: "1:736114095377:web:77fcc0be0b955f777b88b0"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  let db = firebase.firestore()