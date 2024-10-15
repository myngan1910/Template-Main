const {PrismaClient} = require('@prisma/client')
const client = new PrismaClient();
const dissModel = require('../../model/adminModel/discount.js')
module.exports = {
    checkName:async(req,res,next)=>{
        const name=req.body.name;
        const data=await dissModel.checkname(name);
        if(data.length == 0){
            next();
        }else{
            const data= await  dissModel.getDiscount();
            res.render('./admin/discount/diss',{data:data,errorMessage: 'Tên thể loại bị trùng!'})
            }
      }
    

    
}