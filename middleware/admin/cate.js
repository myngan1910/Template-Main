const {PrismaClient} = require('@prisma/client')
const client = new PrismaClient();
const cateModel = require('../../model/adminModel/cate.js')
module.exports = {
    checkName:async(req,res,next)=>{
        const name=req.body.name;
        const data=await cateModel.checkCate(name);
        if(data.length == 0){
            next();
        }else{
            const data= await  cateModel.getCate();
            res.render('./admin/categories/cate',{data:data,errorMessage: 'Tên thể loại bị trùng!'})
            }
      }
    

    
}