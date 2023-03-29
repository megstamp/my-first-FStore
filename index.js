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
const candy = {
    name: "Skittles",
    unitPrice: 3.99,
    size: "16 oz",
    color: "green",
    inventory: 144,
    productNumber: "SK007",
}

db.collection('products').add(candy)
.then(doc => console.log("added doc: " + doc.id))
.catch(err => console.log(err))

