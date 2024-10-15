const {PrismaClient} = require('@prisma/client')
const client = new PrismaClient();
const proModel = require('../../model/adminModel/promotion.js')
module.exports = {
    checkName:async(req,res,next)=>{
        const name=req.body.name;
        const data=await proModel.checkname(name);
        if(data.length == 0){
            next();
        }else{
            const data= await  proModel.getPro();
            res.render('./admin/promotion/promo',{data:data,errorMessage: 'Tên thể loại bị trùng!'})
            }
      }
    

    
}