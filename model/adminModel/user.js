const {PrismaClient, Prisma} = require('@prisma/client');

const client = new PrismaClient();
module.exports = {

     
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
    getUserr: async(userid) => {
        const data = await client.users.findUnique({
            where: {id:userid},
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
    postProfile: async(userid,avata,fname,lname,mail,phone,add1,add2,pass,pos,state,con,com,role) => {
        const update = await client.users.update({
            where: {id:userid},
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

        getOrder: async(idorder,userid) =>{
            const data = await client.orders.update({
                where: { id:parseInt(idorder)},
                data: {
                    userrid: userid,
                    active: 1
                }
            })
            const product = await client.order_product.findMany({
                where: {orderid:parseInt(idorder)}
            })
           for(var i = 0; i < product.length; i++){
            const dele = await client.user_product.deleteMany({
                where: {
                    userid: userid,
                    productid: parseInt(product[i].productid)
                }
            })
           }
        }
}