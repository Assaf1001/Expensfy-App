import firebase from "firebase";

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSEAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// __Reference__

// // child_remove
// database.ref("expenses").on("child_removed", (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // chlid_change
// database.ref("expenses").on("child_changed", (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref("expenses").on("child_added", (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database
//     .ref("expenses")
//     .once("value")
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val(),
//             });
//         });
//         console.log(expenses);
//     });

// database.ref("expenses").push({
//     description: "Rent",
//     note: "",
//     amount: 150000,
//     createdAt: 123123123,
// });

// database.ref().on(
//     "value",
//     (snapshot) => {
//         console.log(snapshot.val());
//     },
//     (err) => {
//         console.log("Error: ", err);
//     }
// );

// .off(callback)

// database
//     .ref("location")
//     .once("value")
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((err) => console.log("Error:", err));

// database
//     .ref()
//     .set({
//         name: "Assaf Harush",
//         age: 30,
//         isSingle: true,
//         location: {
//             city: "Ashdod",
//             country: "Israel",
//         },
//     })
//     .then(() => console.log("Data is saved"))
//     .catch((err) => console.log("Error:", err));

// database
//     .ref("isSingle")
//     .remove()
//     .then(() => console.log("Data was removed"))
//     .catch((err) => console.log(err));

// database.ref().update({
//     name: "Sason",
//     age: 21,
//     job: "Software Developer",
//     isSingle: null,
//     "location/city": "TelAviv",
// });
