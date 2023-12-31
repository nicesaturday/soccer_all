import client from "@/libs/server/client";
import withHandler from "@/libs/server/withHandler";

import { NextApiRequest, NextApiResponse } from "next";
import { useRouter } from "next/router";


async function ChatGetId(req:NextApiRequest,res:NextApiResponse) {

   const {id} = req.query
   const data = await client.chat.findFirst({
      where: {
         id: Number(id),
      }
   })
   return res.status(200).json({data});
}

export default withHandler({methods:["GET"],handler:ChatGetId,isprivate:false});