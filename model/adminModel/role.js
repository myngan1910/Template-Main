const {PrismaClient, Prisma} = require('@prisma/client');

const client = new PrismaClient();
module.exports = {

    getRole: async() => {
        const data = await client.role.findMany();
       return data;
    },
    postCreateRole : async(position) => {
    const create =await client.role.create({
        data: {
            possion: position
        }
    })
    return create;
    },
    getdetailRole: async(genId) => {
       const data = await client.role.findUnique({
        where: {
            id: genId
        }
       })
        return data;
    },
    getdeleRole: async(genId) => {
        
        const data = await client.users.deleteMany({
            where: {
                roleid: genId
            }
        });
      const dele1 = await client.role.deleteMany({where: {id:genId}});
       return {data,dele1};
    
    },
    postRole: async(genId,position) => {
    const update = await client.role.update({
        where: {id:genId},
        data: {possion:position}
    })
    return update;
    
    },  }