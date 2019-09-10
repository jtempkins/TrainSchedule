// var firebaseConfig = {
//     apiKey: "AIzaSyBqR-mAXBCXwC7PuI-t7QfCHUQOt8-JYDw",
//     authDomain: "trainschedule-31ba2.firebaseapp.com",
//     databaseURL: "https://trainschedule-31ba2.firebaseio.com",
//     projectId: "trainschedule-31ba2",
//     storageBucket: "trainschedule-31ba2.appspot.com",
//     messagingSenderId: "225917625893",
//     appId: "1:225917625893:web:bf0c1a8ddcab9f1a0b41cc"
//   };



          var firebaseConfig = {
            apiKey: "AIzaSyBqR-mAXBCXwC7PuI-t7QfCHUQOt8-JYDw",
            authDomain: "trainschedule-31ba2.firebaseapp.com",
            databaseURL: "https://trainschedule-31ba2.firebaseio.com",
            storageBucket: "trainschedule-31ba2.appspot.com",
          };

          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
 
          var database = firebase.database();

    // Initial Values
    var train = "";
    var destination = "";
    var firstTrain = "";
    var frequency = "";


$("#addTrain").on("click", function(event) {
    event.preventDefault();

    var train = $("#train").val().trim();
    var destination = $("#destination").val().trim();
    var firstTrain = $("#firstTrain").val().trim();
    var frequency = $("#frequency").val().trim();

    var newTrain = {
        train: train,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency
        // dateAdded: firebase.database.ServerValue.TIMESTAMP

    };
// console.log(newTrain)

    database.ref().push(newTrain);

   // Clears all of the text-boxes
   $("#train").val("");
   $("#destination").val("");
   $("#firstTrain").val("");
   $("#frequency").val("");   
});


database.ref().on("child_added", function (snapshot) {
    // storing the snapshot.val() in a variable for convenience
    var sv = snapshot.val();
// console.log(sv)
    var train = sv.train;
    var destination = sv.destination;
    var firstTrain = sv.firstTrain;
    var frequency = sv.frequency;

    var timeArr = firstTrain.split(":");
  var trainTime = moment()
    .hours(timeArr[0])
    .minutes(timeArr[1]); 

    //place calculations here
    var minutes = moment().diff(trainTime, "minutes");  
    var minutesAways = minutes % frequency ;
    var minutesToNext = frequency - minutesAways;
    var nextTrain = moment().add(minutesToNext,"m").format("hh:mm");
 console.log("minutes", minutes)

    $("tbody").append(`<tr><td>${train}</td><td>${destination}</td><td>${frequency}</td><td>${nextTrain}</td></tr><td>${minutesToNext}</td></tr>`); 
    //    Handle the errors

},function (errorObject) {
        console.log("Errors handled: " + errorObject.code);
  });