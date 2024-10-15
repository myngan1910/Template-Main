const {PrismaClient, Prisma} = require('@prisma/client');

const client = new PrismaClient();
module.exports = {
   
   
    getSocial: async() => {
        const data = await client.social.findMany();
        return data;
    },
    checkname: async(name) => {
        const data = await client.social.findMany({
            where: {name:name}
        });
        return data;
    },
    postCreSocial : async(name,link) => {
        const create = await client.social.create({
            data: {
                name: name,
                link: link
            }
        })
        return create;
    },
    getdetailSocial: async(genId) => {
        const data = await client.social.findUnique({where: {id:genId}})
        return data;
        },
        getdeleSocial: async(genId) => {
            const data = await client.social.deleteMany({where: {id:genId}})
            return data;
    
        },
        postSocial: async(genId,name,link) => {
           const update = await client.social.update({
            where: {id:genId},
            data: {
                name: name,
                link: link
            }
           })
           return update;
    
        },
    }
