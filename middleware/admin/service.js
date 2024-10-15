const {PrismaClient} = require('@prisma/client')
const client = new PrismaClient();
const serviceModel = require('../../model/adminModel/service.js')
module.exports = {
    checkName:async(req,res,next)=>{
        const name=req.body.name;
        const data=await serviceModel.checkname(name);
        if(data.length == 0){
            next();
        }else{
            const data= await  serviceModel.getService();
            res.render('./admin/service/service',{data:data,errorMessage: 'Tên thể loại bị trùng!'})
            }
      }
    

    
}