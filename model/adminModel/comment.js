const {PrismaClient, Prisma} = require('@prisma/client');
const blog = require('./blog');
const client = new PrismaClient();
module.exports = {
    getComment: async(genId) => {
        const data = await client.comments.findMany({
            where: {blogid : genId},
            select: {
                id: true,
                content:true,
                userid: true,
                blogid: true,
                user: {
                    select: {
                        avata: true,
                        name: true
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
     postCom: async(genId,content,user,blog) => {
     const update =  await client.comments.update({
        where: {id:genId},
        data: {
            content:content,
            userid: parseInt(user),
            postid: parseInt(post)
        }
     })
     return update;
 
 },
}