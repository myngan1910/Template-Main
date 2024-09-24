const {PrismaClient, Prisma} = require('@prisma/client');

const client = new PrismaClient();
module.exports = {

    getEndow: async() => {
        const data = await client.mkt_endow.findMany(); 
       return data;
    },

    postCreateEndow : async(name,img,dis,des) => {
        console.log(1)
    const create = await client.mkt_endow.create({
        data: {
            name: name,
            image:img,
            discount: dis,
            description: des
        }
    })
    return create;
    },
    getDetailEndow: async(genId) => {
        const data = await client.mkt_endow.findUnique({where: {id:genId}})
         return data;
     },
     getDeleteEndow: async(genId) => {
        const data = await client.mkt_endow.deleteMany({where: {id:genId}})
        return data;
     
     },
     postGetEndow: async(genId,name,img,des) => {
     const update = await client.mkt_endow.update({
         where: {id: genId},
         data: {
            name: name,
            image: img,
            discount: dis,
            description: des
         }
     })
     return update;
     
     },}
