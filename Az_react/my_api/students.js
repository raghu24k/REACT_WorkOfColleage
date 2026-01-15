const express = require('express')
const router = express.Router()

// middleware that is specific to this router
const timeLog = (req, res, next) => {
  console.log('Time: ', Date.now())
  next()
}
router.use(timeLog)

// define the home page route
router.get('/', (req, res) => {
  res.send('Rashmi Shah - CE - 6th Sem')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('RK UNIVERSITY')
})
//create an endpoints which will accept dob of students and validate if student is eligible to apply or not based on dob of students
module.exports = router

//create node project to perform operation list of todo list add, delete, update, display todo items