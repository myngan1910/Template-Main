const {PrismaClient, Prisma} = require('@prisma/client');

const client = new PrismaClient();
module.exports = {

      getImg: async() => {
        const data = await client.image_product.findMany({
            select: {
                id: true,
              link: true,
               productid: true,
               product: {
                select: {
                    id: true,
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
                    
                }
               }
            }
        });
     

       return data;
    },
    postCreateImg : async(link,pro) => {
    const create =await client.image_product.create({
        data: {
            link: link,
            productid: pro
        }
    })
    return create;
    },
    getdetailImg: async(genId) => {
       const data = await client.image_product.findUnique({
        where: {
            id: genId
        }
       })
        return data;
    },
    getdeleImg: async(genId) => {
        
        const data = await client.products.deleteMany({
            where: {
                image: genId
            }
        });
      const dele1 = await client.image_product.deleteMany({where: {id:genId}});
      
       return {data,dele1};
    
    },
    postImg: async(genId,link, pro) => {
    const update = await client.image_product.update({
        where: {id:genId},
        data: {
           link: link,
           productid: pro
        }
    })
    return update;
    },  
}