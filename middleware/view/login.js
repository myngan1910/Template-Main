const {PrismaClient} = require('@prisma/client')
const client = new PrismaClient();


module.exports = {
    requireLogin: (req, res, next) =>{
     
        if (!req.session.userId) {
        
          res.redirect('/login');
        } else {
          next();
        }

      },



    
}
