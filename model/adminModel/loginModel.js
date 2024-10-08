const {PrismaClient, Prisma} = require('@prisma/client');

const client = new PrismaClient();
module.exports = {
    loginAdmin: async(id) => {
        const data = await client.users.findUnique({
            where: {id:id},
            select: {
                id: true,
              avata: true,
              fname: true,
              lname: true,
              mail: true,
              phone: true,
              address1: true,
              address2 : true,
              pass: true,
              postal: true,
              state: true,
              contry: true,
              company: true,
              roleid: true,
              role: {
                select: {
                    possion: true
                }
              }
               
            }
        });
     

       return data;
    },
    checkLogin: async(mail) =>{
      const pass = await client.users.findMany({
          where: {mail: mail},
          select: {
              id: true,
              mail: true,
              pass: true
          }
      })
      return pass;

  }
}