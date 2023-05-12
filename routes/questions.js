var express=require('express')
var router=express.Router()
var mongodb=require ('mongodb')

router.post('/save-ques', async function(req,res,next){ 
    try{
    //receive the req
    //take  the data from req
    const dataObj=req.body.data
    //connect with db
    const  url= "mongodb+srv://sathyagoddeti:Satya123@sathya.i0bksh0.mongodb.net/"
    const mongodbClient=mongodb.MongoClient
    const server=await mongodbClient.connect(url)
    const db=server.db('school')
    const collection=db.collection('questions')

    //preform requitrd operations
    const result =await collection.insertOne(dataObj)
    // prepare and send res back to client
       res.send(dataObj)
    }catch(e){
        console.log(e)
        res.send(e)
    }
})

module.exports =router;