// import library
import { MongoClient, ObjectId } from "mongodb";

// this npm package is similar to secrets.js
import dotenv from 'dotenv'
dotenv.config()

const client = new MongoClient(process.env.URI)
const db = client.db(process.env.DB_NAME)
const collection = db.collection('movies')

// create
const movie1 = {
    title: 'Interstellar',
    rating: 'PG-13',
    genre: 'Sci-Fi',
    time: 'just right'
}


//! CRUD METHOD 

//! CREATE:
// adds a document 
const addDoc = async item  => {
    await collection.insertOne(item)
        console.log('Added Document ', item)
}

await addDoc(movie1)



//! UPDATE
const updateDoc = async (docId, fieldName, fieldValue) => {

    const updateID = { _id: new ObjectId(docId)}  // updates the title
    // the reason for the bracketes around fieldName is because we are passing a string as a parameter
    const updateQuery = { $set: {[fieldName]: fieldValue}} // updates the title


    // this func finds the data data by id and updates it
    const result = await collection.findOneAndUpdate(updateID, updateQuery)

}
await updateDoc('63c999662f3e229d630a38fc','title','World of Wars')


//! DELETE
const deleteDoc = async (docID) => {

    const deleteID = { _id: new ObjectId(docID)} // selects an ID
    await collection.deleteOne(deleteID) // func to delete specific data 

}

await deleteDoc('63c999662f3e229d630a38fc')



//! GET / RESPOND
// getting information from the data base
const getDocListing = async limit => {
    // connect to db , find information , limit and place it in an array
    const result = await collection.find({}).limit(limit).toArray()
    console.table(result)
}

await getDocListing(0) // the int allows you to limit the amount of data to see. 0 shows all.


client.close() // closes connection