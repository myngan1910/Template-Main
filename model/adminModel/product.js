const {PrismaClient, Prisma} = require('@prisma/client');
const { getDeleCart } = require('../../controller/userController/cart');
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
                image: {
                    select: {
                        image: true
                    }
                },
                
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
    getProductt: async(genId) => {
        const data = await client.products.findUnique({
            where: {id:genId},
            select: {
                id: true,
                name: true,
                price: true,
                description: true,
                classifid: true,
                image: {
                    select: {
                        image: true
                    }
                },
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
                view: true,
                review: {
                    select: {
                        content: true,
                        evaluate: true,
                        user: {
                            select: {
                                lname: true,
                                avata: true
                            }
                        }
                    }
                }
            },
            
        });
       

       return data; 
    },
    postCreateProduct : async(name,price,des,clas,dis,ons,view,size, color) => {
        
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
       

    const update = await client.products.update({
        where: {id:genId},
        data: {
            name: name,
            price: price,
            description: des,
            classifid: clas,
            discountid: dis,
            onsale: ons,
           
            
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

    createCart: async(id, userid, quatity) => {
        const create = await client.user_product.create({
         data: {
            productid: id,
            userid: parseInt(userid),
            quanlity: quatity

         }
        })
        

    },
    remove: async(userid,productid)=> {
        const data = await client.user_product.deleteMany({
            where: {
                productid: productid,
               userid:userid
            },
            
        })

    },

    getUser_pro: async(userid) => {
        const user_pro = await client.user_product.findMany({
          where: {userid:userid},
          select: {
           product: {
            select: {
                id: true,
                name: true,
               image: {
                select: {
                    image:true
                }
               },
               price: true
            }
           } ,
           quanlity: true
          }
        })
        
        return user_pro;
    },

    increas: async(genId) => {
        const data = await client.products.findUnique({
         where: {id:genId},
         select: {
            view: true,
            

         }
        })
          const data1 = await client.products.update({
            where: {id:genId},
             data: {
                view: data.view + 1,
                
             }
             
          })
    },
     getTopView: async()=> {
        const data = await client.products.findMany({
            select: {
                image: {
                    select: {
                        image: true
                    }
                },
                name: true,
                price: true
            },
            orderBy: {
                view: 'desc'
            },
            take: 3
        })
        return data;
     },
     getOnsale: async()=> {
        const data = await client.products.findMany({
            select: {
                image: {
                    select: {
                        image: true
                    }
                },
                name: true,
                price: true
            },
            orderBy: {
                discountid: 'desc'
            },
            take: 3
        })
        return data;
     },
     gethotItem: async()=> {
        const data = await client.products.findMany({
            select:{
                image: {
                    select: {
                        image: true
                    }
                },
                name: true,
                price: true
            },
            orderBy: {
                view: 'desc'
            }
        })
  return data
     },

     getCart: async(userid, productid) => {
        const data = await client.user_product.findMany({
            where: {userid:userid, productid:productid},
            include: {
                product: {
                    include: {
                        image:{}
                    }
                }
            }

        })
        return data
     },

     getManyCart: async(userid) => {
        const data = await client.user_product.findMany({
            where: {userid:userid},
            include: {
                product: {
                    include: {
                        image:{}
                    }
                }
            },
            select: {
                quanlity:true
            }

        })
        return data
     }


 

}