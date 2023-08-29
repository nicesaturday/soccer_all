import MenuLayout from "@/components/menuLayout";
import useMutation from "@/libs/client/useMutation";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import {motion} from "framer-motion"; 
import enter from "./api/users/enter";
import Message from "@/components/message";
import { useEffect } from "react";


interface EnterForm {
    email:string;
    password:string;
}


interface EnterMutationResult {
  emailOk: boolean;
  passwordOk:boolean;
  enterOk:boolean;

}


const Login = () => {
   const router = useRouter();
   const {register,handleSubmit} = useForm<EnterForm>();
   const [enter,{loading,error,data}] = useMutation<EnterMutationResult>(`/api/users/enter`);
   const onValid = (d:EnterForm) => {
     enter(d)
   }


 useEffect(
  () => {
    if(data?.enterOk == true){
      router.push({
        pathname: `/`,
        query: {loginMessage:"Logined!!"}
      },`/`);
      
    }
  }
 ,[data?.enterOk]) 


    return(
        <>
        <MenuLayout />
        <form onSubmit={handleSubmit(onValid)} className="flex flex-col justify-center items-center h-full pt-12 gap-8">
          <input {...register("email",{ required:true} )} placeholder="Email"/>
          {data?.emailOk ?  <div id="createError">It's not exists</div> : null}
          <input {...register("password", {required:true})} placeholder="Password"/>   
          {data?.passwordOk ?  <div id="createError">Password is different</div> : null}       
        {loading ?<button className=" bg-teal-700">Loading...</button> : <button className=" bg-teal-400">login</button>}
        {router.query.created ? 
   
          <Message message="Success created your id !!"/>
     
         : null}
      </form>
    </>
    )
}

export default Login;