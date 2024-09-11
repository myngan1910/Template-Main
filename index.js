const express = require('express')
const path = require('path')
const app = express()
var bodyParser = require('body-parser')
const { userInfo } = require('os')
const { name } = require('ejs')

const port = 3000
app.use('/', express.static(path.join(__dirname, 'profile')))
app.set('view engine', 'ejs')
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       
app.use(bodyParser.urlencoded({    
  extended: true
}));  
app.use(express.json());
const userRouter = require('./router/userRouter.js')
const adminRouter = require('./router/adminRouter.js')
app.use('/admin', adminRouter)
app.use('/', userRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })