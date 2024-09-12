const {PrismaClient, Prisma} = require('@prisma/client');

const client = new PrismaClient();
module.exports = {

    getColor: async() => {
        const data = await client.color.findMany();
       return data;
    },
    postCreateColor : async(name) => {
    const create =await client.color.create({
        data: {
            name: name
        }
    })
    return create;
    },
    getdetailColor: async(genId) => {
       const data = await client.color.findUnique({
        where: {
            id: genId
        }
       })
        return data;
    },
    getdeleColor: async(genId) => {
        
        const data = await client.color_product.deleteMany({
            where: {
                colorid: genId
            }
        });
      const dele1 = await client.color.deleteMany({where: {id:genId}});
       return {data,dele1};
    
    },
    postColor: async(genId,name) => {
    const update = await client.color.update({
        where: {id:genId},
        data: {name: name}
    })
    return update;
    
    }, }