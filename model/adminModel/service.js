const {PrismaClient, Prisma} = require('@prisma/client');

const client = new PrismaClient();
module.exports = {

    getService: async() => {
        const data = await client.service.findMany(); 
       return data;
    },
    
    checkname: async(name) => {
        const data = await client.service.findMany({
            where: {name:name}
        }); 
       return data;
    },
    postCreateService : async(name,icon,des) => {
    const create = await client.service.create({
        data: {
            name: name,
            icon: icon,
           
            description: des
        }
    })
    return create;
    },
    getDetailService: async(genId) => {
        const data = await client.service.findUnique({where: {id:genId}})
         return data;
     },
     getDeleteService: async(genId) => {
        const data = await client.service.deleteMany({where: {id:genId}})
        return data;
     
     },
     postGetService: async(genId,name,icon,des) => {
     const update = await client.service.update({
         where: {id: genId},
         data: {
            name: name,
            icon: icon,
          
            description: des
         }
     })
     return update;
     
     },}
