// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBqR-mAXBCXwC7PuI-t7QfCHUQOt8-JYDw",
    authDomain: "trainschedule-31ba2.firebaseapp.com",
    databaseURL: "https://trainschedule-31ba2.firebaseio.com",
    projectId: "trainschedule-31ba2",
    storageBucket: "trainschedule-31ba2.appspot.com",
    messagingSenderId: "225917625893",
    appId: "1:225917625893:web:bf0c1a8ddcab9f1a0b41cc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();



$("#Submit").on(click, function (event) {


    var train = $("#train").val().trim();
    var destination = $("#destination").val().trim();
    var firstTrain = $("#firstTrain").val().trim();
    var frequency = $("#frequency").val().trim();

    database.ref().push({
        trainName: train,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      })});


database.ref().on("child_added", function (snapshot) {
    // storing the snapshot.val() in a variable for convenience
    var sv = snapshot.val();


//place calculations here


    $("tbody").append(`<tr><td>${sv.name}</td><td>${sv.email}</td><td>${sv.age}</td><td>${sv.comment}</td></tr>`); 



    //    Handle the errors

},function (errorObject) {
        console.log("Errors handled: " + errorObject.code);
  });