const {PrismaClient, Prisma} = require('@prisma/client');
const { postCreateService, getDetailService, getDeleteService, postGetService, getCate, postSize, postCreateProduct, getdetailProduct, getdeleProduct, getdetailOrder, getdeleOrder, getImg, postCreateImg, getdetailImg, getdeleImg, postImg, getRev, postRev, postBlog, getOrder } = require('../controller/adminController');
const { name } = require('ejs');
const client = new PrismaClient();
module.exports = {
    getShopInfo: async() => {
        const data = await client.shop_info.findMany(); 
       return data;
    },

    postCreateShop : async(name,logo,mail,phone,add,des) => {
        console.log(1)
    const create = await client.shop_info.create({
        data: {
            name: name,
            logo: logo,
            mail: mail,
            phone: phone,
            address: add,
            description: des
        }
    })
    return create;
    },
    getDetailShop: async(genId) => {
        const data = await client.shop_info.findUnique({where: {id:genId}})
         return data;
     },
     getDeleteShop: async(genId) => {
        const data = await client.shop_info.deleteMany({where: {id:genId}})
        return data;
     
     },
     postGetShop: async(genId,name,logo,mail,phone,add,des) => {
     const update = await client.shop_info.update({
         where: {id: genId},
         data: {
            name: name,
            logo: logo,
            mail: mail,
            phone: phone,
            address: add,
            description: des
         }
     })
     return update;
     
     },
    // SOCIAL
    getSocial: async() => {
        const data = await client.social.findMany();
        return data;
    },
    postCreSocial : async(name,link) => {
        const create = await client.social.create({
            data: {
                name: name,
                link: link
            }
        })
        return create;
    },
    getdetailSocial: async(genId) => {
        const data = await client.social.findUnique({where: {id:genId}})
        return data;
        },
        getdeleSocial: async(genId) => {
            const data = await client.social.deleteMany({where: {id:genId}})
            return data;
    
        },
        postSocial: async(genId,name,link) => {
           const update = await client.social.update({
            where: {id:genId},
            data: {
                name: name,
                link: link
            }
           })
           return update;
    
        },


         //ROLE
    getRole: async() => {
        const data = await client.role.findMany();
       return data;
    },
    postCreateRole : async(position) => {
    const create =await client.role.create({
        data: {
            possion: position
        }
    })
    return create;
    },
    getdetailRole: async(genId) => {
       const data = await client.role.findUnique({
        where: {
            id: genId
        }
       })
        return data;
    },
    getdeleRole: async(genId) => {
        
        const data = await client.users.deleteMany({
            where: {
                roleid: genId
            }
        });
      const dele1 = await client.role.deleteMany({where: {id:genId}});
       return {data,dele1};
    
    },
    postRole: async(genId,position) => {
    const update = await client.role.update({
        where: {id:genId},
        data: {possion:position}
    })
    return update;
    
    },  


    // SERVICE
    getService: async() => {
        const data = await client.service.findMany(); 
       return data;
    },

    postCreateService : async(name,icon,des) => {
        console.log(1)
    const create = await client.service.create({
        data: {
            name: name,
            icon: icon,
           
            description: des
        }
    })
    return create;
    },
    getDetailService: async(genId) => {
        const data = await client.service.findUnique({where: {id:genId}})
         return data;
     },
     getDeleteService: async(genId) => {
        const data = await client.service.deleteMany({where: {id:genId}})
        return data;
     
     },
     postGetService: async(genId,name,icon,des) => {
     const update = await client.service.update({
         where: {id: genId},
         data: {
            name: name,
            icon: icon,
          
            description: des
         }
     })
     return update;
     
     },
  

 
       //CONTACT

       getCtc: async() => {
        const data = await client.contact.findMany() 
        return data;
    },
    postCreateCtc : async(name,subject,mail,phone,mess) => {
        const createctc = await client.contact.create({
            data:{
                name:name,
                subject: subject,
                mail:mail,
                phone: phone,
                message:mess
            }
        })
        return createctc;
    },
    getdetailCtc: async(genId) => {
    const data = await client.contact.findUnique({where: {id:genId}})
    return data;
    },
    getdeleCtc: async(genId) => {
        const data = await client.contact.deleteMany({where: {id:genId}})
        return data;

    },
    postCtc: async(genId,name,subject,mail,phone,mess) => {
        const update = await client.contact.update({
            where: {id:genId},
            data: {
                name: name,
                subject: subject,
                mail: mail,
                phone: phone,
                message: mess
            }
        })
        return update;

    },


     //CATEGORIES
     getCate: async() => {
        const data = await client.categories.findMany();
       return data;
    },
    postCreateCate : async(name) => {
    const create =await client.categories.create({
        data: {
            name: name
        }
    })
    return create;
    },
    getdetailCate: async(genId) => {
       const data = await client.categories.findUnique({
        where: {
            id: genId
        }
       })
        return data;
    },
    getdeleCate: async(genId) => {
        
        const data = await client.blogs_categories.deleteMany({
            where: {
                categorieid: genId
            }
        });
      const dele1 = await client.categories.deleteMany({where: {id:genId}});
       return {data,dele1};
    
    },
    postCate: async(genId,name) => {
    const update = await client.categories.update({
        where: {id:genId},
        data: {name: name}
    })
    return update;
    
    },  

    //TAGS
    getTag: async() => {
        const data = await client.tags.findMany();
       return data;
    },
    postCreateTag : async(name) => {
    const create =await client.tags.create({
        data: {
            name: name
        }
    })
    return create;
    },
    getdetailTag: async(genId) => {
       const data = await client.tags.findUnique({
        where: {
            id: genId
        }
       })
        return data;
    },
    getdeleTag: async(genId) => {
        
        const data = await client.blogs_tags.deleteMany({
            where: {
                tagid: genId
            }
        });
      const dele1 = await client.tags.deleteMany({where: {id:genId}});
       return {data,dele1};
    
    },
    postTag: async(genId,name) => {
    const update = await client.tags.update({
        where: {id:genId},
        data: {name: name}
    })
    return update;
    
    },  


    //TAGS
    getColor: async() => {
        const data = await client.color.findMany();
       return data;
    },
    postCreateColor : async(name) => {
    const create =await client.color.create({
        data: {
            name: name
        }
    })
    return create;
    },
    getdetailColor: async(genId) => {
       const data = await client.color.findUnique({
        where: {
            id: genId
        }
       })
        return data;
    },
    getdeleColor: async(genId) => {
        
        const data = await client.color_product.deleteMany({
            where: {
                colorid: genId
            }
        });
      const dele1 = await client.color.deleteMany({where: {id:genId}});
       return {data,dele1};
    
    },
    postColor: async(genId,name) => {
    const update = await client.color.update({
        where: {id:genId},
        data: {name: name}
    })
    return update;
    
    },  

    //SIZE
    getSize: async() => {
        const data = await client.size.findMany();
       return data;
    },
    postCreateSize : async(name) => {
    const create =await client.size.create({
        data: {
            name: name
        }
    })
    return create;
    },
    getdetailSize: async(genId) => {
       const data = await client.size.findUnique({
        where: {
            id: genId
        }
       })
        return data;
    },
    getdeleSize: async(genId) => {
        
        const data = await client.size_product.deleteMany({
            where: {
                sizeid: genId
            }
        });
      const dele1 = await client.size.deleteMany({where: {id:genId}});
       return {data,dele1};
    
    },
    postSize: async(genId,name) => {
    const update = await client.size.update({
        where: {id:genId},
        data: {name: name}
    })
    return update;
    
    },  
    //DISCOUNT
    getDiscount: async() => {
        const data = await client.discounts.findMany();
    return data;
    },
    postCreateDiscount : async(name) => {
    const create =await client.discounts.create({
        data: {
            name: name
        }
    })
    return create;
    },
    getdetailDiscount: async(genId) => {
    const data = await client.discounts.findUnique({
        where: {
            id: genId
        }
    })
        return data;
    },
    getdeleDiscount: async(genId) => {
        
        const data = await client.products.deleteMany({
            where: {
                discountid: genId
            }
        });
    const dele1 = await client.discounts.deleteMany({where: {id:genId}});
    return {data,dele1};

    },
    postDiscount: async(genId,name) => {
    const update = await client.discounts.update({
        where: {id:genId},
        data: {name: name}
    })
    return update;

    },  




     //USER-CLASS
     getUser_class: async() => {
        const data = await client.user_class.findMany();
       return data;
    },
    postCreateUser_class : async(name) => {
    const create =await client.user_class.create({
        data: {
            name: name
        }
    })
    return create;
    },
    getdetailUser_class: async(genId) => {
       const data = await client.user_class.findUnique({
        where: {
            id: genId
        }
       })
        return data;
    },
    getdeleUser_class: async(genId) => {
        
        const data = await client.products.deleteMany({
            where: {
                classifid: genId
            }
        });
      const dele1 = await client.user_class.deleteMany({where: {id:genId}});
       return {data,dele1};
    
    },
    postUser_class: async(genId,name) => {
    const update = await client.user_class.update({
        where: {id:genId},
        data: {name: name}
    })
    return update;
    
    },  

    //PRODUCT
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
            onsale: ons,
            view: view
        }
    })
    
    const productid = create.id;
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
               }
            }
        });
     

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


      //ORDER
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
    
    },  

      //IMG-PRO
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
    
     //USER
     getUser: async() => {
        const data = await client.users.findMany({
            select: {
                id: true,
              avata: true,
              fname: true,
              lname: true,
              mail: true,
              phone: true,
              address1: true,
              address2 : true,
              pass: true,
              postal: true,
              state: true,
              contry: true,
              company: true,
              roleid: true,
              role: {
                select: {
                    possion: true
                }
              }
               
            }
        });
     

       return data;
    },
    postCreateUser : async(avata,fname,lname,mail,phone,add1,add2,pass,pos,state,con,com,role) => {
    const create =await client.users.create({
        data: {
           avata: avata,
           fname: fname,
           lname: lname,
           mail: mail,
           phone: phone,
           address1: add1,
           address2: add2,
           pass: pass,
           postal: pos,
           state: state,
           contry: con,
           company: com,
           roleid: role
        }
    })
    return create;
    },
    getdetailUser: async(genId) => {
       const data = await client.users.findUnique({
        where: {
            id: genId
        }
       })
        return data;
    },
    getdeleUser: async(genId) => {
        
        const data = await client.comments.deleteMany({
            where: {
                userid: genId
            }
        });
      const dele1 = await client.blogs.deleteMany({where: {userid:genId}});
      const dele2 = await client.reviews.deleteMany({where: {userid:genId}});
      const dele3 = await client.orders.deleteMany({where: {userrid:genId}});
      const dele4 = await client.users.deleteMany({where: {id:genId}});
      
       return {data,dele1,dele2,dele3,dele4};
    
    },
    postUser: async(genId,avata,fname,lname,mail,phone,add1,add2,pass,pos,state,con,com,role) => {
    const update = await client.users.update({
        where: {id:genId},
        data: {
            avata: avata,
            fname: fname,
            lname: lname,
            mail: mail,
            phone: phone,
            address1: add1,
            address2: add2,
            pass: pass,
            postal: pos,
            state: state,
            contry: con,
            company: com,
            roleid: role
        }
    })
    return update;
    
    },  
    
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
    
    },  
    
    
    









































    checkimg: async (image,data) => {
        var img = null;
        if(image == undefined){
            if(data.length != 0){
               img = data.image || data.avata;

            }else {
               img = "assets/uploads/icon-04.png" 
            }

        }else {
            img = "assets/uploads/" + image.filename;
        }
        return img;
    }

}