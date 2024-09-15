const {PrismaClient} = require('@prisma/client')
const client = new PrismaClient();
const loginModel = require('../model/userModel/loginModel.js')
const  bcrypt = require('bcrypt')

module.exports = {
    requireLogin: (req, res, next) =>{
     
        if (!req.session.userId) {
        
          res.redirect('/login');
        } else {
          next();
        }

      },

    login: async(req, res, next) => {
        
            const mail = req.body.mail;
            const pass1 = req.body.pass;
            const pass = bcrypt.hashSync(pass1,5)
            const user = await loginModel.postLogin(mail)
    
            const checkpass = await bcrypt.compare(pass1,user[0].pass)
            
          if(user.length != 0  && checkpass){
            req.session.userId = user[0].id;
            
            res.redirect('/');
          } else{
            res.redirect('/login')
          }
    
        
        


    }  
    
}
