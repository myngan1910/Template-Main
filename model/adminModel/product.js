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
                quanlity: true,
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
    checkname: async(name) => {
       const data = await client.products.findMany({
        where: {name:name}
       })
    }, 
    getpageProduct: async(pro) => {
        const data = await client.products.findMany({
            skip: pro,
            take: 3,
            select: {
                id: true,
                name: true,
                price: true,
                description: true,
                quanlity:true,
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
                quanlity:true,
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
    getlikeProduct: async(userid) => {
        const data = await client.like_product.findMany({
            where: {
                userid: userid 
            },
            select: {
                id: true,  
                userid: true, 
                productid: true,
                product: {  
                    select: {
                        name: true,
                        price: true,
                        description: true,
                        quanlity: true,
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
                    }
                }
            }
        });
        return data;
        
    },
    
    postCreateProduct : async(name,price,des,quant,clas,dis,ons,view,size, color) => {
        
    const creat =await client.products.create({
        data: {
            name: name,
            price: price,
            description: des,
            quanlity: quant,
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
    return {size_product, color_product};
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
    postProduct: async(genId,name,price,des,quant,clas,dis,ons,view,size, color) => {
       

    const update = await client.products.update({
        where: {id:genId},
        data: {
            name: name,
            price: price,
            description: des,
            quanlity: quant,
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
        const data = await client.user_product.findMany({
            where: {
                productid:id,
                userid:userid,
            }
        })

        if(data.length > 0) {
            const update = await client.user_product.updateMany({
                where: {productid:id, userid:userid},
                data: {
                    quanlity: String(parseInt(data[0].quanlity) + parseInt(quatity))
                }
            })
       
        }else{
        const create = await client.user_product.create({
         data: {
            productid: id,
            userid: parseInt(userid),
            quanlity: quatity

         }
        })
    }
        

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
                id:true,    
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
                id:true,
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
                id:true,
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

     getCart: async(userid) => {
        
        const data = await client.user_product.findMany({
            where: {userid:userid},
            include: {
                product: {
                    include: {
                        image:{},
                    }
                }
            }

        })
        return data
     },

     postCheck: async(idproduct, quanlity, userid) => {
       const order = await client.orders.findMany({
      where: {
        userrid: userid,
        active: 0
      },
      select: {
        id: true
      }
       })
   if(order.length <= 0) {
    var orders = await client.orders.create({
        data: {
            userrid: userid,
            active: 0
        }
    })
    const newoder = await client.orders.findMany({
        where: {
          userrid: userid,
          active: 0
        },
        select: {
          id: true
        }
         })
        for(var i = 0; i < idproduct.length; i++){
         const data = await client.order_product.create({
            data: {
                orderid: newoder[0].id,
                productid: parseInt(idproduct[i]),
                quanlity: quanlity[i].toString()
                }
        })
   }}else {
    const dele = await client.order_product.deleteMany({where:{orderid: order[0].id} })
    for(var i = 0; i < idproduct.length; i++){
    const data = await client.order_product.create({
        data: {
            orderid: order[0].id,
            productid: parseInt(idproduct[i]),
            quanlity: quanlity[i].toString()
        }
    })
   }}
       
     },
     getOrder: async(userid) => {
        const data = await client.orders.findMany({
            where: {userrid: userid}

        })
        return data;
     },
  
    createlikeProduct: async(userid,genId) => {
        const data = await client.like_product.findMany({
            where: {userid:userid, productid:genId}
        })
        if(data.length > 0){
            const del= await client.like_product.deleteMany({
                where: {userid:userid, productid:genId}
            })
        }else{

        const crea = await client.like_product.create({
            data: {
                userid:userid,
                productid: genId
            }
        })
    }
       
    },




 

}