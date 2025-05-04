const {PrismaClient} = require('@prisma/client')
const client = new PrismaClient();
const productModel = require('../../model/adminModel/product.js')
module.exports = {
    checkName:async(req,res,next)=>{
        const name=req.body.name;
        const data=await productModel.checkname(name);
        if(!data || data.length === 0){
            next();
        }else{
            const data= await  productModel.getProduct();
            res.render('./admin/products/product',{data:data,errorMessage: 'Tên thể loại bị trùng!'})
            }
      }
    

    
}