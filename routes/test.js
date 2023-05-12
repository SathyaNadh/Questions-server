var express=require('express')
var router=express.Router()

router.get('/get-test', function(req,res){
    res.send('my first request completed')
})

router.get('/test-query', function(req,res,next){

     const n =req.query.name
     const l = req.query.loc

     res.send(`My Name is ${n},I am from ${l}.`)

})   

router.patch('/test-path/:name/:loc', function(req,res,next){
    const n=req.params.name
    const l=req.params.loc

    res.send(`My Name is ${n}, I am from ${l}`)
})

router.put('/test-headers',function (req,res,next){
    const n= req.headers.name
    const l= req.headers.loc
    res.send(`My Name Is ${n}, My Location is ${l}`)
})

router.post('/test-post',function (req,res,next){
    const n= req.body.name
    const l=req.body.loc
    res.send(`My Name is ${n},My Location Is ${l}`)
})
    



module.exports=router;
