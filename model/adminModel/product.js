const {PrismaClient, Prisma} = require('@prisma/client');
const client = new PrismaClient();

module.exports = {
    getProduct: async() => {
        const data = await client.products.findMany({
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
            },
            orderBy: {
                id: 'asc'
            }
        });
     

       return data;
    },
    postCreateProduct : async(name,price,des,clas,dis,ons,view,size, color) => {
        console.log(12345678)
    const create =await client.products.create({
        data: {
            name: name,
            price: price,
            description: des,
            classifid: clas,
            discountid: dis,
            onsale: 0,
            view: 0
        }
    })
    const product = await client.products.findFirst({
       
        where: {
           
            name: name,
            price: price,
            description: des,
            classifid: clas,
            discountid: dis
           
           
        },
        orderBy: {
        id: 'desc'
        },
        select: {
            id:true
        }
    });
    
    const productid = product.id;
    const size_product = await client.size_product.create({
      data: {
        productid: productid,
        sizeid: parseInt(size),


      }
    }) 
    const color_product = await client.color_product.create({
        data: {
            productid: productid,
            colorid: parseInt(color)
        }
    })
    return {create, size_product, color_product};
    },
    getdetailProduct: async(genId) => {
       const data = await client.products.findUnique({
        where: {
            id: genId
        }
       })
        return data;
    },
    getdeleProduct: async(genId) => {
        
        const data = await client.color_product.deleteMany({
            where: {
                productid: genId
            }
        });
      const dele1 = await client.image_product.deleteMany({where: {productid:genId}});
      const dele2 = await client.size_product.deleteMany({where: {productid:genId}});
      const dele3 = await client.order_product.deleteMany({where: {productid:genId}});
      const dele4 = await client.products.deleteMany({where: {id:genId}});
       return {data,dele1,dele2,dele3,dele4};
    
    },
    postProduct: async(genId,name,price,des,clas,dis,ons,view,size, color) => {
        console.log(size)

    const update = await client.products.update({
        where: {id:genId},
        data: {
            name: name,
            price: price,
            description: des,
            classifid: clas,
            discountid: dis,
            onsale: ons,
            view: view,
            
        }
    })
    const size_product = await client.size_product.upsert({
        where: {
            productid_sizeid: {
                productid: genId,
                sizeid: parseInt(size)}
            },
           
        
        update: {
            sizeid: parseInt(size) 
        },
        create: {
            productid: genId,
            sizeid: parseInt(size) 
        }
       
    });
    const color_product = await client.color_product.upsert({
        where: {
            productid_colorid: {
                productid: genId,
                colorid: parseInt(color)}
            },
           
        
        update: {
            colorid: parseInt(color) 
        },
        create: {
            productid: genId,
            colorid: parseInt(color) 
        }
       
    });
    
   
    return {update, size_product, color_product};
    
    },  

}