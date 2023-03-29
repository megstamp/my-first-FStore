// Import the tools from fire-admin
import { initializeApp, cert } from "firebase-admin/app";// we use to connect to our FB project
import { getFirestore } from "firebase-admin/firestore"; // we use to connect to Firestore

//Import our credentials from a secret file
import { credentials } from "./credentials.js";

// then connect to our Firebase projects
initializeApp({
    credential: cert(credentials) 
});

//then connect to Firestore DB
const db = getFirestore();

//add a product to our products collection
const candy2 = {
    name: "Twix",
    unitPrice: 2.99,
    size: "12 oz",
    color: "gold",
    inventory: 288,
    productNumber: 2,
}
//
// // How to add a document to Firestore, returning a promise
// db.collection('products').add(candy2)
//   //promise is a temporary special kind of object in JS that can exist in one of three states. 1 in progress, 2. resolved, or 3. rejected.this returns a promise, let's the code continue on while its running. 
// .then((doc) => { //are returning a doc
//     console.log("added doc:" + doc.id)
//      // not returning a document but a "do"
//     // I can be sure inside.then() that the first process was completed successfully
// } )
// .catch(err => console.log(err)) //rejected = a catch

// how to read a document from Firestore:
db.collection("products").doc("Tlv8X6KnPnTvvL47nHLe").get()
    .then(doc => {
        console.log(doc.data())
    })
    // .catch(err => console.log(err)) //can also wtrite it as
    .catch(err => console.log(err))
    //db.collection("products").doc ("NUMBER").delete()

    //How to update a document in Firestore:
    db.collection("products").doc("Tlv8X6KnPnTvvL47nHLe").update({
        inventory: 555, 
        customerFavorite: true
    })



    //how to get a whole collection:

    db.collection("products").get()
    .then(collection => {
        const productList = collection.docs.map(doc =>({...doc.data(),id: doc.id}));
        console.table(productList);
    })
    .catch(console.log)
