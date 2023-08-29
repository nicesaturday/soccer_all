import client from "@/libs/server/client";
import withHandler, { ResponseType } from "@/libs/server/withHandler";
import { withApiSession } from "@/libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";



async function handler(
    req:NextApiRequest,res:NextApiResponse<ResponseType>
) {
    const id = req.session;
   
    if(id){
     await id.destroy();
     return res.json({
        ok:true,
    });
   }else{
    return  res.json({ok:false});
   }
}

export default withApiSession(
    withHandler({
        methods:["GET"],
        handler
    })
)