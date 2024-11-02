const {PrismaClient, Prisma} = require('@prisma/client');
const client = new PrismaClient();
module.exports = {

    getTyper: async() => {
        const data = await client.typer.findMany();
       return data;
    },
    checkname: async(name) => {
        const data = await client.typer.findMany({
            where: {name:name}
        });
       return data;
    },
    postCreateTyper : async(name) => {
    const create =await client.typer.create({
        data: {
            name: name
        }
    })
    return create;
    },
    getdetailTyper: async(genId) => {
       const data = await client.typer.findUnique({
        where: {
            id: genId
        }
       })
        return data;
    },
    getdeleTyper: async(genId) => {
        
        const data = await client.type_user.deleteMany({
            where: {
                typerid: genId
            }
        });
      const dele1 = await client.typer.deleteMany({where: {id:genId}});
       return {data,dele1};
    
    },
    postTyper: async(genId,name,user) => {
    const update = await client.typer.update({
        where: {id:genId},
        data: {name: name}
    })
    const data = await client.type_user.deleteMany({where: {typerid:genId}})
    for(var i = 0; i < user.length; i++){
        const typerr = await client.type_user.create({
          data: {
              userid: parseInt(user[i]),
              typerid: genId
          }
        })
    return update;
    
    }},  

    
}