const {PrismaClient} = require('@prisma/client')
const client = new PrismaClient();
const color = require('../../model/adminModel/color.js')
module.exports = {
    checkName:async(req,res,next)=>{
        const name=req.body.name;
        const data=await color.checkname(name);
        if(data.length == 0){
            next();
        }else{
            const data= await  color.getColor();
            res.render('./admin/color/color',{data:data,errorMessage: 'Tên thể loại bị trùng!'})
            }
      }
    

    
}
