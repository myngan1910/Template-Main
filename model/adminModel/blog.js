const {PrismaClient, Prisma} = require('@prisma/client');

const client = new PrismaClient();
module.exports = {

     //BLOG
     getBlog: async() => {
        const data = await client.blogs.findMany({
            select: {
               id: true,
               image: true,
               time: true,
               description1: true,
               description2: true,
               creater: true,
               userid: true,
               user: {
                select: {
                    fname: true,
                    avata: true,
                    lname: true
                }
               },
              
                
               
            }
        });
     
       
       return data;
    },
    getBlogg: async(genId) => {
        const data = await client.blogs.findUnique({
            where: {id:genId},
            select: {
               id: true,
               image: true,
               time: true,
               description1: true,
               description2: true,
               creater: true,
               user: {
                select: {
                    fname: true,
                    avata: true,
                    lname: true
                }
               },
               comment: {
                    select:{
                        content:true,
                        user:{
                            select:{
                             lname:true,
                            avata:true   
                            }
                            
                        } 
                    }
                
               }
            }
        })
        
       return data;
    },
    postCreateBlog : async(imagee,time,des,dess,cre,user, cate,tag) => {
    const create =await client.blogs.create({
        data: {
            image: imagee,
            time: time,
            description1: des,
            description2: dess,
            creater: cre,
            userid: user
        }
    })
    const blog = create.id;
    const blogs_categories = await client.blogs_categories.create({
        data: {
            blogid: blog,
            categorieid: parseInt(cate)
        }
    })

    const blogs_tags = await client.blogs_tags.create({
        data: {
            blogid: blog,
            tagid: parseInt(tag)
        }
    })
    return {create, blogs_categories, blogs_tags};
    },
    getdetailBlog: async(genId) => {
       const data = await client.blogs.findUnique({
        where: {
            id: genId
        }
       })
        return data;
    },
    getdeleBlog: async(genId) => {
        
        const data = await client.blogs_categories.deleteMany({
            where: {
                blogid: genId
            }
        });
      const dele1 = await client.blogs_tags.deleteMany({where: {blogid:genId}});
      const dele2 = await client.comments.deleteMany({where: {blogid:genId}});
      const dele3 = await client.blogs.deleteMany({where: {id:genId}});
       return {data,dele1,dele2,dele3};
    
    },
    postBlog: async(genId,imagee,time,des,dess,cre,user, cate, tag) => {
    const update = await client.blogs.update({
        where: {id:genId},
        data: {
           image: imagee,
           time: time,
           description1: des,
           description2: dess,
           creater: cre,
           userid: user
        }
    })

    const blogs_tags = await client.blogs_tags.upsert({
        where: {
            blogid_tagid: {
                blogid: genId,
                tagid: parseInt(tag)
            }
        },
        update: {
            tagid: parseInt(tag)
        },
        create: {
           blogid: genId,
           tagid: parseInt(tag)
        }

    })

    const blogs_categories = await client.blogs_categories.upsert({
        where: {
            blogid_categorieid: {
                blogid: genId,
                categorieid: parseInt(cate)
            }
        },
        update: {
            categorieid: parseInt(cate)
        },
        create: {
            blogid: genId,
            categorieid: parseInt(cate)
        }
    })
    return {update, blogs_categories,blogs_tags};
    
    },  

}