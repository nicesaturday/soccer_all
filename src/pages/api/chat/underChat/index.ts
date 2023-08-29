import client from "@/libs/server/client";
import withHandler from "@/libs/server/withHandler";
import { withApiSession } from "@/libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";


async function ChatUnderPost(req:NextApiRequest,res:NextApiResponse) {


    if(req.method == "POST") {
        const {comment} = req.body;
        const {id:chat} = req.query;
        const {user} = req.session;
    console.log(chat,comment,"ididid")
         if(!user) {
            return res.status(401).json({ok:false});
        } 
         await client.underChat.create({
            data:{
               user:{
                connect: {
                    id: user?.id,
    
                },
               },
               chat: {
                connect: {
                    id: +String(chat),
                },
               },
               comment
            }
        })  
      
        return res.status(200).json({ok:true});
    }

    if(req.method == "GET") {
        const underChatData = await client.underChat.findMany({
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                    }
                }
            }
        })

        return res.status(200).json({underChatData})
    }
} 

export default withApiSession(withHandler({methods:["GET","POST"],handler:ChatUnderPost,isprivate:false}));