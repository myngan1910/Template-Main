const {PrismaClient, Prisma} = require('@prisma/client');

const client = new PrismaClient();

module.exports = {
    getCoupon: async() => {
        const data = await client.coupon.findMany({
            orderBy: {
                id : 'asc'
            }
        });
        return data;
    },
    // userCoupon: async (userid) => {
    //     const data = await client.user_coupon.findMany({
    //         where: {
    //             userid: userid,
    //             coupon: {
    //                 action: 1
    //             }
    //         },
    //         include: {
    //             coupon: {}
               
    //         }
    //     });
    //     return data;
    // },
    userCoupon: async (userid) => {
        const data = await client.coupon.findMany({
            where: {
                action: 1,
                typer: {
                    some: {
                        typer: {
                            user: {
                                some: {
                                    userid: userid
                                }
                            }
                        }
                    }
                }
            },
            include: {
                typer: true,
                userclass: true,
            }
        });
        return data;
    },
    getCouponn: async(idproduct,account) => {
       
        const data = await client.coupon.findMany({
            where: {id: parseInt(idproduct)}
        });
        
        return data;
    },
    postDonate: async (user,coupon) => {
        
        if (user != undefined && coupon != undefined) {
            for (var i = 0; i < user.length; i++) {
                    const coupons = await client.user_coupon.findMany({
                        where: {
                            userid: parseInt(user[i]),
                            couponid: parseInt(coupon)
                        }
                    });
    
                    
                    if (coupons.length > 0) {
                        const data = await client.user_coupon.update({
                            where: { id: coupons[0].id },
                            data: {
                                userid: parseInt(user[i]),
                                couponid: parseInt(coupon),
                            }
                        });
                    } else {
                       
                        const data = await client.user_coupon.create({
                            data: {
                                userid: parseInt(user[i]),
                                couponid: parseInt(coupon),
                               
                            }
                        });
                    }
                   
                        const coupon2 = await client.coupon.findMany({ where: { id: parseInt(coupon) } })
                        const data2 = await client.coupon.update({
                            where: { id: coupon2[0].id}, 
                            data: {
                                quantity: String(parseInt(coupon2[0].quantity) - 1)
                            }
                        });
                    
                }
            }
    
         
          
            
        
    },
    
           
     postTyper: async(typer,coupon) => {
        if ( typer != undefined && coupon != undefined) {
            for (var i = 0; i < typer.length; i++) {
                    const coupons = await client.type_coupon.findMany({
                        where: {
                            typerid: parseInt(typer[i]),
                            couponid: parseInt(coupon)
                        }
                    });
    
                    
                    if (coupons.length > 0) {
                        const data = await client.type_coupon.update({
                            where: { id: coupons[0].id },
                            data: {
                                typerid: parseInt(typer[i]),
                                couponid: parseInt(coupon),
                            }
                        });
                    } else {
                       
                        const data = await client.type_coupon.create({
                            data: {
                                typerid: parseInt(typer[i]),
                                couponid: parseInt(coupon),
                               
                            }
                        });
                    }
                   
                       
                    
                }
            }

     },
    

  
    Coupon: async(userid) => {
      const data = await client.coupon_oder.findMany({
          where: {
              oder: {
                  userrid: userid  
              }
          },
          select: {
              couponid: true, 
              coupon: {
                  select: {
                      pricemin: true 
                  }
              }
          }
      });
      return data;
  },
  

    postCreateCoupon: async(name,dis,quant,price,buy,accmin,accbuy,clas) => {
        const data = await client.coupon.create({
            data: {
                name:name,
                discount: dis,
                quantity:quant,
                pricemin: price,
                buymin: buy,
                acountmin: accmin,
                acountbuymin: accbuy,
                // coupon:JSON.stringify(clas),
                coupon:clas,
                action: 0
                
            }
        })
        return data;
    },
    getdetailCoupon: async(genId) => {
        const data = await client.coupon.findUnique({
            where: {
                id: genId
            }
        })
            return data;
    },
    getdeleCoupon: async(genId) => {
        
        const data = await client.class_coupon.deleteMany({
            where: {
                couponid: genId
            }
        });
        const data2 = await client.user_coupon.deleteMany({
            where: {
                couponid: genId
            }
        });
        const data1 = await client.coupon_oder.deleteMany({
            where: {
                couponid: genId
            }
        });
        const data3 = await client.coupon_product.deleteMany({
            where: {
                couponid: genId
            }
        });
        const dele2 = await client.type_coupon.deleteMany({where: {couponid: genId}})
        const dele1 = await client.coupon.deleteMany({where: {id:genId}});
        return {data,dele1,data2,data1,data3, dele2};
    },
    postCoupon: async(genId,name,dis,quant,price,buy,accmin,accbuy,clas,action) => {
        const update = await client.coupon.update({
            where: {id:genId},
            data: {name: name,
                name:name,
                discount: dis,
                quantity:quant,
                pricemin: price,
                buymin: buy,
                acountmin: accmin,
                acountbuymin: accbuy,
                // coupon: JSON.stringify(clas),
                coupon:clas,
                action: action
            }
        })
        return update;
    
        }, 

        oderCoupon: async (id, idcoupon) => {
          const data = await client.coupon_oder.findMany({
            where: {
                oderid: id
            }
        });
          if (data.length > 0) {
            const delet = await client.coupon_oder.deleteMany({
              where: { id: data[0].id }
            });
        
            const cre = await client.coupon_oder.create({
              data: { oderid: id, couponid: idcoupon }
            });
        
          } else {
            const crea = await client.coupon_oder.create({
              data: { oderid: id, couponid: idcoupon }
            });
          }
        },

        getActivate: async(couponId) => {
            const data = await client.coupon.update({
                where: { id: couponId },
                data: { action: 1 },
            });
            return data;
        },
        getDeactivate: async(couponId) => {
            const data = await client.coupon.update({
                where: { id: couponId },
                data: { action: 0 },
            });
            return data;
        },
        getUpdate: async(userid) => {
            const coupon = await client.coupon.findUnique({
                where: { id: userid },
                select: { quantity: true } 
            });
        
            if (coupon && coupon.quantity > 0) {
                const data = await client.coupon.update({
                    where: { id: userid },
                    data: { quantity:String(parseInt(coupon.quantity) - 1) }
                });
                return data;
            } 
        
}}