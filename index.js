const express = require('express')
const path = require('path')
const app = express()
var bodyParser = require('body-parser')
const { userInfo } = require('os')
const { name } = require('ejs')
const session = require('express-session')
const cookieParser = require('cookie-parser');

const port = 3000
app.use('/', express.static(path.join(__dirname, 'profile')))
app.set('view engine', 'ejs')
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       
app.use(bodyParser.urlencoded({    
  extended: true
}));  

app.use(express.json());
app.use(cookieParser());
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } 
}));
const userRouter = require('./router/userRouter.js')
const adminRouter = require('./router/adminRouter.js')
const checklogin= require('./middleware/view/login.js')
const checkAdmin = require('./middleware/admin/loginAdmin.js')
app.use('/admin', checklogin.requireLogin, checkAdmin.loginAdmin,  adminRouter)
app.use('/', userRouter);
// checklogin.requireLogin, checkAdmin.loginAdmin,      
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })