// conncect to mongoDB
// import mongo library
import { MongoClient } from "mongodb";

// import credentials that allows us to connect to our server
import { uri } from "./secrets.js";

// connect to our mongo server
const client = new MongoClient(uri);

// create a referrence to our database
const db = client.db('mongo0')

// add a document to the collection


// add a piece of furniture to the collection
const stool = {
    name: 'Ergo Stool',
    brand: 'Autonomous',
    color: 'Evergreen',
    price: 169.00,
    warranty: '2 years'
}

const chair = {
    name: 'Ergo Chair',
    brand: 'Autonomous',
    color: 'Black',
    price: 369.00,
    warranty: '2 years'
}

// adds an object to the collection using async await function
// async says don't move on until this line is complete
async function addOneItem (item) {
    db.collection('items').insertOne(item)   
}

addOneItem(stool)
addOneItem(chair)