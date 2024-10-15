const {PrismaClient, Prisma} = require('@prisma/client');

const client = new PrismaClient();
module.exports = {

    getTag: async() => {
        const data = await client.tags.findMany();
       return data;
    },
    checkname: async(name) => {
        const data = await client.tags.findMany({
            where: {name:name}
        });
       return data;
    },
    postCreateTag : async(name) => {
    const create =await client.tags.create({
        data: {
            name: name
        }
    })
    return create;
    },
    getdetailTag: async(genId) => {
       const data = await client.tags.findUnique({
        where: {
            id: genId
        }
       })
        return data;
    },
    getdeleTag: async(genId) => {
        
        const data = await client.blogs_tags.deleteMany({
            where: {
                tagid: genId
            }
        });
      const dele1 = await client.tags.deleteMany({where: {id:genId}});
       return {data,dele1};
    
    },
    postTag: async(genId,name) => {
    const update = await client.tags.update({
        where: {id:genId},
        data: {name: name}
    })
    return update;
    
    },  
}