var firebaseConfig = {
    apiKey: "AIzaSyBqR-mAXBCXwC7PuI-t7QfCHUQOt8-JYDw",
    authDomain: "trainschedule-31ba2.firebaseapp.com",
    databaseURL: "https://trainschedule-31ba2.firebaseio.com",
    projectId: "trainschedule-31ba2",
    storageBucket: "",
    messagingSenderId: "225917625893",
    appId: "1:225917625893:web:bf0c1a8ddcab9f1a0b41cc"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

    // Initial Values
    var train = "";
    var destination = "";
    var firstTrain = "";
    var frequency = "";


$("#Submit").on("click", function (event) {
    event.preventDefault();

    train = $("#train").val().trim();
    destination = $("#destination").val().trim();
    firstTrain = $("#firstTrain").val().trim();
    frequency = $("#frequency").val().trim();

    database.ref().push({
        trainName: train,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    })
});


database.ref().on("child_added", function (snapshot) {
    // storing the snapshot.val() in a variable for convenience
    var sv = snapshot.val();


    //place calculations here
    var minutes = moment().diff(firstTrain, "minutes");  
    var  minutesaways = minutes % frequency ;
    var nexttrain = moment().add(minuteaway,"m").format("hh:mm");
 
    $("tbody").append(`<tr><td>${sv.name}</td><td>${sv.email}</td><td>${sv.age}</td><td>${sv.comment}</td></tr>`); 



    //    Handle the errors

},function (errorObject) {
        console.log("Errors handled: " + errorObject.code);
  });