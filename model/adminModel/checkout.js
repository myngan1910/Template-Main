const {PrismaClient, Prisma} = require('@prisma/client');

const client = new PrismaClient();

module.exports = {
    checkbuymin: async(userid, account) =>{
        const data = await client.user_coupon.findMany({
            where: {
                id: userid,
                coupon: {
                    buymin: {
                        lt:String(Math.round(account))
                    }
                }
            },
            include: {
                coupon: {
                    include: {
                        userclass:true,
                            
                        
                            
                        
                        
                        
                    },
                }
            }
            
        })
       

        return data;
    
    }
}