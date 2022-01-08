var firebaseConfig = {
  apiKey: "AIzaSyBzPkICk_SsRgdkMziZtF2PNulOEzwN4Xw",
  authDomain: "project-ccc9f.firebaseapp.com",
  databaseURL: "https://project-ccc9f-default-rtdb.firebaseio.com",
  projectId: "project-ccc9f",
  storageBucket: "project-ccc9f.appspot.com",
  messagingSenderId: "614163019251",
  appId: "1:614163019251:web:6dd01717273dfcfc0fce86",
  measurementId: "G-XN470F082M"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("Username");
document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

function addroom() {
       room_name = document.getElementById("room_name").value;

       firebase.database().ref("/").child(room_name).update({
            purpose: "Adding Room Name"
      });

      localStorage.setItem("Roomname",room_name);
  
      window.location = "room.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
 Room_names = childKey;
//Start code
      console.log("room_name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
//End code
});});}
getData();
function redirectToroomname(name){
console.log(name);
localStorage.setItem("Roomname",name);
window.location = "room.html";
}

function logout() {
localStorage.removeItem("Username");
localStorage.removeItem("Roomname");
window.location = "index.html";
}