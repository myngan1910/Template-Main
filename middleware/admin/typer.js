const {PrismaClient} = require('@prisma/client')
const client = new PrismaClient();
const typeModel = require('../../model/adminModel/typer.js')
module.exports = {
    checkName:async(req,res,next)=>{
        const name=req.body.name;
        const data=await typeModel.checkname(name);
        if(data.length == 0){
            next();
        }else{
            const data= await  typeModel.getTyper();
            res.render('./admin/typer/typer',{data:data,errorMessage: 'Tên thể loại bị trùng!'})
            }
      }
    

    
}