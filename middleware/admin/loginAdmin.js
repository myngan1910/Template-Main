const {PrismaClient} = require('@prisma/client')
const client = new PrismaClient();
const login = require('../../model/adminModel/loginModel.js')

module.exports = {
    loginAdmin: async(req,res, next ) => {
      const id = req.session.userId;
      const data = await login.loginAdmin(id);
      console.log(data.role)
      if(data.role.possion !=  "Admin" ) {
         res.redirect('/')
      } else {
       next()
      }
    },

    
}
