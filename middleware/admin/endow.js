const {PrismaClient} = require('@prisma/client')
const client = new PrismaClient();
const endowModel = require('../../model/adminModel/endow.js')
module.exports = {
    checkName:async(req,res,next)=>{
        const name=req.body.name;
        const data=await endowModel.checkname(name);
        if(data.length == 0){
            next();
        }else{
            const data= await  endowModel.getEndow();
            res.render('./admin/endow/endow',{data:data,errorMessage: 'Tên thể loại bị trùng!'})
            }
      }
    

    
}