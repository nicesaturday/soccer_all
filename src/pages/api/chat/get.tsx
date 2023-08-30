import client from "@/libs/server/client";
import withHandler from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";


async function ChatGet(req:NextApiRequest,res:NextApiResponse) {

   const dataAll = await client.chat.findMany();
   return res.status(200).json({ok:true,dataAll})

   
}

export default withHandler({methods:["GET"],handler:ChatGet,isprivate:false});