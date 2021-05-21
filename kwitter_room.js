function logout()
{
    window.location = "index.html";
}


var firebaseConfig = {
    apiKey: "AIzaSyAuSvfmsVo6v2ZSJYaG9kQ4llaVU4bSRVQ",
    authDomain: "kwitter-eb035.firebaseapp.com",
    databaseURL: "https://kwitter-eb035-default-rtdb.firebaseio.com",
    projectId: "kwitter-eb035",
    storageBucket: "kwitter-eb035.appspot.com",
    messagingSenderId: "1053360569986",
    appId: "1:1053360569986:web:920b97557e9e6b80903e9b",
    measurementId: "G-JG9F2HMBPK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 
 function redirectToRoomName(name)
 {
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";        
 }
 function addRoom()
 { room_name = document.getElementById("room_name").value;
 firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
 });
    
   localStorage.setItem("room_name" , room_name);
   window.location = "kwitter_page.html";
 
 }