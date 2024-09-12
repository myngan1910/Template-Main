const {PrismaClient, Prisma} = require('@prisma/client');

const client = new PrismaClient();
module.exports = {


    //SIZE
    getSize: async() => {
        const data = await client.size.findMany();
       return data;
    },
    postCreateSize : async(name) => {
    const create =await client.size.create({
        data: {
            name: name
        }
    })
    return create;
    },
    getdetailSize: async(genId) => {
       const data = await client.size.findUnique({
        where: {
            id: genId
        }
       })
        return data;
    },
    getdeleSize: async(genId) => {
        
        const data = await client.size_product.deleteMany({
            where: {
                sizeid: genId
            }
        });
      const dele1 = await client.size.deleteMany({where: {id:genId}});
       return {data,dele1};
    
    },
    postSize: async(genId,name) => {
    const update = await client.size.update({
        where: {id:genId},
        data: {name: name}
    })
    return update;
    
    },}