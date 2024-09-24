const {PrismaClient, Prisma} = require('@prisma/client');

const client = new PrismaClient();
module.exports = {

      getImg: async() => {
        const data = await client.image_product.findMany({
            select: {
                id: true,
              image: true,
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
    postCreateImg : async(img,pro) => {
        for(var i=0; i < img.length; i++){
    const create =await client.image_product.create({
        data: {
            image: img[i],
            productid: pro
        }
    })
}
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
        
        const dele1 = await client.image_product.deleteMany({
            where: { productid: genId }
        });
    
       
        const data = await client.products.deleteMany({
            where: { id: genId }
        });
    
        return { data, dele1 };
    },
    postImg: async(genId,img, pro) => {
        for(var i=0; i< img; i++){
    const update = await client.image_product.update({
        where: {id:genId},
        data: {
           image: img[i],
           productid: pro
        }
    })
}
    },  
}