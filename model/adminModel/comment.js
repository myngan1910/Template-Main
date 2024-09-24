const {PrismaClient, Prisma} = require('@prisma/client');
const client = new PrismaClient();
module.exports = {
    getComment: async(genId) => {
        const data = await client.comments.findMany({
            where: {ID : genId},
            select: {
                id: true,
                content:true,
                userid: true,
                blogid: true,
                user: {
                    select: {
                        avata: true,
                        lname: true
                    }
                }

            }
        })
    return data;
},


    postCreateCom: async(content,user,blog) => {
    const create =  await client.comments.create({
        data: {
            content: content,
            userid: parseInt(user),
            blogid: parseInt(blog)
        }
    })
    return create;
},
 getdetailCom: async(genId) => {
    const data = await client.comments.findUnique({where: {id: genId}})
        return data;
},
getdeleCom: async(genId) => {
   
     const data1 =await client.comments.deleteMany({where: {id:genId}})
    return {data1};
 },
    
}