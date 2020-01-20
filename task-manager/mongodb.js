//CRUD create read update delete

// const mongodb = require ('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlPaser : true}, (error,client) => {
    if (error) {
       return console.log('Unable to connect to database')
    } 

    const db = client.db(databaseName)

    // db.collection('users').findOne({_id : new ObjectID("String ID from GUI to be put here")}, (error, user)=>{
    //     if (error){
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({age : 27}).toArray((error,users)=>{
    //     console.log(users)
    // })

    // db.collection('users').find({age : 27}).toArray((error,count)=>{
    //     console.log(count)
    // })

    db.collection('tasks').findOne({_id : new ObjectID("String ID from GUI to be put here")}, (error, task)=>{
        console.log(task)
    })

    db.collection('tasks').find({completed : false}).toArray((error,tasks)=>{
        console.log(tasks)
    })

    // db.collection('users').insertOne({
    //     name : 'Vikram',
    //     age : 26
    // }, (error,result) =>{
    //     if (error){
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name : 'Jen',
    //         age : 28
    //     }, {
    //         name :'Gunther',
    //         age : 27
    //     }, (error,result) => {
    //         if (error) {
    //             return console.log('Unable to insert documents !')
    //         }

    //         console.log(result.ops)
    //     }
    // ])

    // db.collection('tasks').insertMany([
    //         {
    //             decsription : 'Clean the house',
    //             completed : true
    //         }, {
    //             description :'Renew inspection',
    //             completed : false
    //         }, {
    //             description : 'Pot Plant',
    //             completed : false
    //         }, (error,result) => {
    //             if (error) {
    //                 return console.log('Unable to insert documents !')
    //             }
    
    //             console.log(result.ops)
    //         }
    //     ])
    
    // db.collection('users').updateOne({
    //     _id : new ObjectID("String value from Robo 3T")
    // }, {
    //     $inc :{ 
    //         age: 1
    //     }
    // }).then((result) =>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //      completed : false
    // }, {
    //     $set :{ 
    //         completed : true
    //     }
    // }).then((result) =>{
    //     console.log(result.modifiedCount)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // db.collection('users').deleteMany({
    //     age : 27 
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error) =>{
    //     console.log(error)
    // })

    db.collection('users').deleteOne({
        description : 'Clean the house' 
    }).then((result)=>{
        console.log(result)
    }).catch((error) =>{
        console.log(error)
    })



})