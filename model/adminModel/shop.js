const {PrismaClient, Prisma} = require('@prisma/client');

const client = new PrismaClient();
module.exports = {
    getShopInfo: async() => {
        const data = await client.shop_info.findMany(); 
       return data;
    },

    postCreateShop : async(name,logo,mail,phone,add,des) => {
    const create = await client.shop_info.create({
        data: {
            name: name,
            logo: logo,
            mail: mail,
            phone: phone,
            address: add,
            description: des
        }
    })
    return create;
    },
    getDetailShop: async(genId) => {
        const data = await client.shop_info.findUnique({where: {id:genId}})
         return data;
     },
     getDeleteShop: async(genId) => {
        const data = await client.shop_info.deleteMany({where: {id:genId}})
        return data;
     
     },
     postGetShop: async(genId,name,logo,mail,phone,add,des) => {
     const update = await client.shop_info.update({
         where: {id: genId},
         data: {
            name: name,
            logo: logo,
            mail: mail,
            phone: phone,
            address: add,
            description: des
         }
     })
     return update;
     
     },}