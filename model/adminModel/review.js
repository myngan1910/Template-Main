const {PrismaClient, Prisma} = require('@prisma/client');

const client = new PrismaClient();
module.exports = {

     

    
    //REVIEW
    getRev: async() => {
        const data = await client.reviews.findMany({
            select: {
              content: true,
              evaluate: true,
              userid: true,
              productid: true,
              
              user: {
                select: {
                    avata: true,
                    fname: true,
                    lname: true,
                    mail: true
                }
              },
              product: {
                select: {
                name: true,
                price: true,
                description: true,
                classifid: true,
                classify: {
                    select: {
                        name: true
                    }
                },
                discountid: true,
                discount: {
                    select: {
                        name: true
                    }
                },
                onsale: true,
                view: true
              }}
               
            }
        });
     

       return data;
    },
    postCreateRev : async(content,evl,user,product) => {
    const create =await client.reviews.create({
        data: {
          content: content,
          evaluate: evl,
          userid: user,
          productid: product
        }
    })
    return create;
    },
    getdetailRev: async(genId) => {
       const data = await client.reviews.findUnique({
        where: {
            id: genId
        }
       })
        return data;
    },
    getdeleRev: async(genId) => {
        
        const data = await client.reviews.deleteMany({
            where: {
                id: genId
            }
        });
      
      
       return {data};
    
    },
    postRev: async(genId,content, evl, user, product) => {
    const update = await client.reviews.update({
        where: {id:genId},
        data: {
          content: content,
          evaluate: evl,
          userid: user,
          productid: product
        }
    })
    return update;
    
    },}