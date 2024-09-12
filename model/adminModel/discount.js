const {PrismaClient, Prisma} = require('@prisma/client');

const client = new PrismaClient();
module.exports = {
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



}