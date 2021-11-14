var firebaseConfig = {
      apiKey: "AIzaSyAvXAVwYCM49PwBWWC4Jnu_G4udRIF1LAQ",
      authDomain: "kwitter-c1d1a.firebaseapp.com",
      databaseURL: "https://kwitter-c1d1a-default-rtdb.firebaseio.com",
      projectId: "kwitter-c1d1a",
      storageBucket: "kwitter-c1d1a.appspot.com",
      messagingSenderId: "904440191990",
      appId: "1:904440191990:web:1cf1319a529906685dc5d7"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class=' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebaseConfig.databaseURL().ref("/").child(room_name).update({
        purpose : "adding room name"
    });

    localStorage.setItem("room_name" , room_name);

    window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name)
      localStorage.setItem("room_name", name);
      window.location= "kwitter_page.html";
}
