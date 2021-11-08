
var firebaseConfig = {
    apiKey: "AIzaSyCrHajvAcAZeLqKId3pIANTwcG51t4a0LU",
    authDomain: "practice-94-cefee.firebaseapp.com",
    databaseURL: "https://practice-94-cefee-default-rtdb.firebaseio.com",
    projectId: "practice-94-cefee",
    storageBucket: "practice-94-cefee.appspot.com",
    messagingSenderId: "997872311342",
    appId: "1:997872311342:web:f0a01d020a51ad3c5153bf"
  };
  
  
  firebase.initializeApp(firebaseConfig);
 
  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      })
  }