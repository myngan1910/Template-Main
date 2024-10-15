const {PrismaClient} = require('@prisma/client')
const client = new PrismaClient();
const sizeModel = require('../../model/adminModel/size.js')
module.exports = {
    checkName:async(req,res,next)=>{
        const name=req.body.name;
        const data=await sizeModel.checkname(name);
        if(data.length == 0){
            next();
        }else{
            const data= await  sizeModel.getSize();
            res.render('./admin/size/size',{data:data,errorMessage: 'Tên thể loại bị trùng!'})
            }
      }
    

    
}