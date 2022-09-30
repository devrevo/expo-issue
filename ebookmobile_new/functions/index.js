const functions = require("firebase-functions");
const fetch =require("node-fetch");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
exports.sendPushNotification = functions.database.ref("/users/{id}")
    .onCreate((event)=> {
      const root = event.database.ref.root;
      const messages = [];
      return root.child("/users").once("value").then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          const expoToken = childSnapshot.val().expoToken;
          if (expoToken) {
            messages.push({
              "to": expoToken,
              "body": "Read your favorite books",
            });
          }
        });
        return Promise.all(messages);
      });
    }).then((messages)=> {
      fetch("https://exp.host/--/api/v2/push/send", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messages),
      });
    });
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
