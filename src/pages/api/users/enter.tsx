import client from "@/libs/server/client";
import withHandler from "@/libs/server/withHandler";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import {withIronSessionApiRoute} from "iron-session/next";
import bcrypt from "bcryptjs";
import { withApiSession } from "@/libs/server/withSession";





async function handler (req:NextApiRequest,res:NextApiResponse)  {
       
   const {email,password} = req.body;
   let user;
  
   if(email) {
    user = await client.user.findUnique({
        where: {
            email,
        }
    })
   }
    
   
    const passwordCheck = await bcrypt.hash(password,5);
    const passwordCheck2 = user?.password!;
    const passwordFinalCheck = await bcrypt.compare(password,passwordCheck2);
    if(!user) {
        console.log(req.session)
      return res.status(401).json({emailOk:true})
    } else if(passwordFinalCheck == false){

        return res.status(401).json({passwordOk:true})

    } else{
      req.session.user =  {
        id:user?.id
      }
     await req.session.save();
    }


   
   // 이메일 확인
   
 
    
    return res.status(200).json({enterOk:true}); 
}

export default withApiSession(withHandler({methods:["POST"],handler,isprivate:false}))