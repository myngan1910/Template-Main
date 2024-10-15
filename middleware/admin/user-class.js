const {PrismaClient} = require('@prisma/client')
const client = new PrismaClient();
const userModel = require('../../model/adminModel/user_class.js')
module.exports = {
    checkName:async(req,res,next)=>{
        const name=req.body.name;
        const data=await userModel.checkname(name);
        if(data.length == 0){
            next();
        }else{
            const data= await  userModel.getUser_class();
            res.render('./admin/user-class/class',{data:data,errorMessage: 'Tên thể loại bị trùng!'})
            }
      }
    

    
}