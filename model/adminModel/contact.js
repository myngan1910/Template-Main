const {PrismaClient, Prisma} = require('@prisma/client');

const client = new PrismaClient();
module.exports = {

 


       getCtc: async() => {
        const data = await client.contact.findMany() 
        return data;
    },
    postCreateCtc : async(name,subject,mail,phone,mess) => {
        const createctc = await client.contact.create({
            data:{
                name:name,
                subject: subject,
                mail:mail,
                phone: phone,
                message:mess
            }
        })
        return createctc;
    },
    getdetailCtc: async(genId) => {
    const data = await client.contact.findUnique({where: {id:genId}})
    return data;
    },
    getdeleCtc: async(genId) => {
        const data = await client.contact.deleteMany({where: {id:genId}})
        return data;

    },
    postCtc: async(genId,name,subject,mail,phone,mess) => {
        const update = await client.contact.update({
            where: {id:genId},
            data: {
                name: name,
                subject: subject,
                mail: mail,
                phone: phone,
                message: mess
            }
        })
        return update;

    },}