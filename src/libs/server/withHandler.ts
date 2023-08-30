import { NextApiRequest, NextApiResponse } from "next";


export interface ResponseType {
    ok: boolean;
    [key: string]: any;
  }

type method = "GET"|"POST"|"DELETE";


interface ConfigType {
    methods: method[];
    handler:(req:NextApiRequest,res:NextApiResponse) => void;
    isprivate?:boolean;
}

export default function withHandler({
    methods,
    isprivate = true,
    handler,
}:ConfigType) {
    return async function(req:NextApiRequest,res:NextApiResponse) : Promise<any> {
        if(req.method && !methods.includes(req.method as any)) {
     
            return res.status(405).end(); 
        }
        if(isprivate && !req.session.user) {
            return res.status(401).json({ok:false,error:"plz log in"})
        }
        try{
            await handler(req,res)
        }         
        catch(error){
          
            return res.status(500).json({error,emailOk:true})  
            
        }
    }
}