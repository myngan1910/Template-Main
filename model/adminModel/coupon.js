const {PrismaClient, Prisma} = require('@prisma/client');

const client = new PrismaClient();

module.exports = {
    getCoupon: async() => {
        const data = await client.coupon.findMany();
        return data;
    },
    userCoupon: async(userid) => {
       const data = await client.user_coupon.findMany({
        where: {userid: userid},
        include: {
            coupon: {}
        }
       })
    
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
                for (var j = 0; j < coupon.length; j++) {
                    const coupons = await client.user_coupon.findMany({
                        where: {
                            userid: parseInt(user[i]),
                            couponid: parseInt(coupon[j])
                        }
                    });
    
                    
                    if (coupons.length > 0) {
                        const data = await client.user_coupon.update({
                            where: { id: coupons[0].id },
                            data: {
                                quantity: coupons[0].quantity + 1 
                            }
                        });
                    } else {
                       
                        const data = await client.user_coupon.create({
                            data: {
                                userid: user[i],
                                couponid: parseInt(coupon[j]),
                                quantity: 1 
                            }
                        });
                    }
                        const coupon2 = await client.coupon.findMany({ where: { id: parseInt(coupon[j]) } })
                        const data2 = await client.coupon.update({
                            where: { id: coupon2[0].id}, 
                            data: {
                                quantity: String(parseInt(coupon2[0].quantity) - 1)
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
  

    postCreateCoupon: async(name,dis,quant,price,buy,accmin,accbuy,clas,action) => {
        const data = await client.coupon.create({
            data: {
                name:name,
                discount: dis,
                quantity:quant,
                pricemin: price,
                buymin: buy,
                acountmin: accmin,
                acountbuymin: accbuy,
                coupon:JSON.stringify(clas),
                action: action
                
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
                classid: genId
            }
        });
        const dele1 = await client.coupon.deleteMany({where: {id:genId}});
        return {data,dele1};
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
                coupon: JSON.stringify(clas),
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
        
}