import withHandler from "@/libs/server/withHandler"
import { NextApiRequest, NextApiResponse } from "next"
import client from "@/libs/server/client";
import bcrypt from "bcryptjs";


async function handler (req:NextApiRequest,res:NextApiResponse){

   const {email,password,passwordCheck,name} = req.body;

   const emailCheck =   await client.user.findUnique({
        where: {
            email
        },
   })

   if(emailCheck?.email == email ) {

    return res.status(401).json({emailOk:true}); 
   } 
   //이메일 체크
   if(password !== passwordCheck) {
    return res.status(401).json({passwordCheckOk:true}); 
   }
   //비밀번호체크
   const nameCheck = await client.user.findUnique({
        where: {
            name,
        }
   })
   if(nameCheck == name) {
    return res.status(401).json({nameOk:true}); 
   }
   const hashPassword = await bcrypt.hash(password,5);
 
  let newUser = await client.user.create({
      data: {
        email,
        password: hashPassword,
        name

      }
   })
  
   
  

    return res.status(200).json({createdOk:true}); 
}

export default withHandler({methods:["POST"],handler,isprivate:false})