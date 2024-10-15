const {PrismaClient} = require('@prisma/client')
const client = new PrismaClient();
const tagModel = require('../../model/adminModel/tag.js')
module.exports = {
    checkName:async(req,res,next)=>{
        const name=req.body.name;
        const data=await tagModel.checkname(name);
        if(data.length == 0){
            next();
        }else{
            const data= await  tagModel.getTag();
            res.render('./admin/tags/tag',{data:data,errorMessage: 'Tên thể loại bị trùng!'})
            }
      }
    

    
}