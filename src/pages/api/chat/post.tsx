import client from "@/libs/server/client";
import withHandler from "@/libs/server/withHandler";
import { withApiSession } from "@/libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function ChatPost(req:NextApiRequest,res:NextApiResponse) {
    const {title,comment} = req.body;
    const {user} = req.session;

     if(!user) {
        return res.status(401).json({ok:false});
    } 
      await client.chat.create({
        data:{
           user:{
            connect: {
                id: user?.id,
            }
           },
        
           title,
           comment
        }
    }) 
  
    return res.status(200).json({ok:true});
} 

export default withApiSession(withHandler({methods:["POST"],handler:ChatPost,isprivate:false}));