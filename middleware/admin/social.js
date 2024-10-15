const {PrismaClient} = require('@prisma/client')
const client = new PrismaClient();
const socialModel = require('../../model/adminModel/social.js')
module.exports = {
    checkName:async(req,res,next)=>{
        const name=req.body.name;
        const data=await socialModel.checkname(name);
        if(data.length == 0){
            next();
        }else{
            const data= await  socialModel.getSocial();
            res.render('./admin/social/social',{data:data,errorMessage: 'Tên thể loại bị trùng!'})
            }
      }
    

    
}