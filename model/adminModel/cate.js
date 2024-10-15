const {PrismaClient, Prisma} = require('@prisma/client');

const client = new PrismaClient();
module.exports = {

     getCate: async() => {
        const data = await client.categories.findMany();
       return data;
    },
    checkCate: async(name) => {
        const data = await client.categories.findMany({
            where: {name:name}
        });
       return data;
    },
    postCreateCate : async(name) => {
    const create =await client.categories.create({
        data: {
            name: name
        }
    })
    return create;
    },
    getdetailCate: async(genId) => {
       const data = await client.categories.findUnique({
        where: {
            id: genId
        }
       })
        return data;
    },
    getdeleCate: async(genId) => {
        
        const data = await client.blogs_categories.deleteMany({
            where: {
                categorieid: genId
            }
        });
      const dele1 = await client.categories.deleteMany({where: {id:genId}});
       return {data,dele1};
    
    },
    postCate: async(genId,name) => {
    const update = await client.categories.update({
        where: {id:genId},
        data: {name: name}
    })
    return update;
    
    },  }