const {PrismaClient, Prisma} = require('@prisma/client');
const client = new PrismaClient();

module.exports = {
    postLogin: async(mail) =>{
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