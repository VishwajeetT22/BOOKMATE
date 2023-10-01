const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const userController = require('./controller/user')
const app = express()
const port = 5000

const connectionString = ''//Enter link of mongodb atlas to connect

mongoose.connect(connectionString)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB: ', error);
  });



//parse application /x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}))

//parse application/json
app.use(bodyParser.json())

app.post('/signup', userController.signup)

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})
