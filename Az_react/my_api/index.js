// const { RvHookup } = require('@mui/icons-material')
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/uni',(req,res)=>res.send('Welcome to RKU!!'))
app.get('/student',(req,res)=>res.json({
    name: "Raghu",
    city: "rajkot",
    sem: 6,
    div: 'c',
    branch: "CE"
}))
app.get('/myname/:fname/:lname',(req,res)=>res.send(`Welcome ${req.params.fname} ${req.params.lname}`))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// 1.student details
// 2.create n points uniqe which will print WELCOME TO RKU
// 3.to get user input a,b and then print it simply