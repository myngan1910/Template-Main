const {PrismaClient, Prisma} = require('@prisma/client');

const client = new PrismaClient();
module.exports = {

    getPro: async() => {
        const data = await client.promotion.findMany(); 
       return data;
    },
    checkname: async(name) => {
        const data = await client.promotion.findMany({
            where: {name:name}
        }); 
       return data;
    },

    postCreatePro : async(name,img,dis,title) => {
       
    const create = await client.promotion.create({
        data: {
            name: name,
            image:img,
            discount: dis,
          title: title
        }
    })
    return create;
    },
    getDetailPro: async(genId) => {
        const data = await client.promotion.findUnique({where: {id:genId}})
         return data;
     },
     getDeletePro: async(genId) => {
        const data = await client.promotion.deleteMany({where: {id:genId}})
        return data;
     
     },
     postGetPro: async(genId,name,img,dis,title) => {
     const update = await client.promotion.update({
         where: {id: genId},
         data: {
            name: name,
            image: img,
            discount: dis,
           title: title
         }
     })
     return update;
     
     },}
