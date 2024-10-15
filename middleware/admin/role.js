const {PrismaClient} = require('@prisma/client')
const client = new PrismaClient();
const roleModel = require('../../model/adminModel/role.js')
module.exports = {
    checkName:async(req,res,next)=>{
        const name=req.body.name;
        const data=await roleModel.checkname(name);
        if(data.length == 0){
            next();
        }else{
            const data= await  roleModel.getRole();
            res.render('./admin/role/role',{data:data,errorMessage: 'Tên thể loại bị trùng!'})
            }
      }
    

    
}