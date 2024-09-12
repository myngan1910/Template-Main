const {PrismaClient, Prisma} = require('@prisma/client');

const client = new PrismaClient();
module.exports = {

     getUser_class: async() => {
        const data = await client.user_class.findMany();
       return data;
    },
    postCreateUser_class : async(name) => {
    const create =await client.user_class.create({
        data: {
            name: name
        }
    })
    return create;
    },
    getdetailUser_class: async(genId) => {
       const data = await client.user_class.findUnique({
        where: {
            id: genId
        }
       })
        return data;
    },
    getdeleUser_class: async(genId) => {
        
        const data = await client.products.deleteMany({
            where: {
                classifid: genId
            }
        });
      const dele1 = await client.user_class.deleteMany({where: {id:genId}});
       return {data,dele1};
    
    },
    postUser_class: async(genId,name) => {
    const update = await client.user_class.update({
        where: {id:genId},
        data: {name: name}
    })
    return update;
    
    },  
}