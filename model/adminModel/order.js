const {PrismaClient, Prisma} = require('@prisma/client');

const client = new PrismaClient();
module.exports = {

      getOrder: async() => {
        const data = await client.orders.findMany({
            select: {
              id: true,
               userrid: true,
               userr: {
                select: {
                    avata: true,
                    fname: true,
                    lname: true,
                    mail: true,
                    phone: true,
                    address1: true,
                    address2: true,
                    postal: true,
                    contry: true,
                    state: true,
                    roleid: true
                    
                }
               }
            }
        });
     

       return data;
    },
    postCreateOrder : async(user) => {
    const create =await client.orders.create({
        data: {
            
            userrid: user
        }
    })
    return create;
    },
    getdetailOrder: async(genId) => {
       const data = await client.orders.findUnique({
        where: {
            id: genId
        }
       })
        return data;
    },
    getdeleOrder: async(genId) => {
        
        const data = await client.order_product.deleteMany({
            where: {
                orderid: genId
            }
        });
      const dele1 = await client.orders.deleteMany({where: {id:genId}});
      
       return {data,dele1};
    
    },
    postOrder: async(genId,user) => {
    const update = await client.orders.update({
        where: {id:genId},
        data: {
           
           userid: user
        }
    })
    return update;
    
    },}