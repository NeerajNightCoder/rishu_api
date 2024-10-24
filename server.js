// using simple nodejs 
// react , express()

const express=require('express')
const server=express()  

server.use(express.json())
server.use(express.urlencoded({extended:true}))



// storing data // use db but for now we are using inmemory array
const skillsArray=[]

//get('/rishu',(req,res)=>{})
server.get('/getskills',(req,res)=>{
    return res.status(200).send(skillsArray)
})


server.get('/neeraj',(req,res)=>{
    return res.status(200).send('Hii Neerajjj!!')
})

server.post('/addskill',(req,res)=>{
    skillsArray.push(req.body.newSkill)
    return res.status(201).end()
})

// server.method('path',(req,res)=>{return res.status(200).json(datatosend)})

//{listen()=>listens on a particular port}
server.listen(5000)