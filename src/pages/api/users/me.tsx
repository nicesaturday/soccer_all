import client from "@/libs/server/client";
import withHandler, { ResponseType } from "@/libs/server/withHandler";
import { withApiSession } from "@/libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";



async function handler(
    req:NextApiRequest,res:NextApiResponse<ResponseType>
) {
    const profile = await client.user.findUnique({
        where: {
            id: req.session.user?.id
        }
    });
    if(profile){
    res.json({
        ok:true,
        profile
    });
   }else{
    res.json({ok:false});
   }
}

export default withApiSession(
    withHandler({
        methods:["GET"],
        handler
    })
)