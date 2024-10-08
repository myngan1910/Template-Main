const {PrismaClient} = require('@prisma/client')
const client = new PrismaClient();

module.exports = {
    logout: (req, res) => {
        req.session.destroy(err => {
          if (err) {
            console.error('Error destroying session:', err);
          }
          res.clearCookie('connect.sid');
          res.redirect('/login');
        });
      }
}