import { useState,useEffect } from "react"
import {motion} from "framer-motion";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import useMutation from "@/libs/client/useMutation";
import useUser from "@/libs/client/useUser";
import useSWR from "swr";


const cardsVars = {
    start: {scale:0},
    end: {
      scale:1,
      transition:{type:"tween",delay:0.15},
      initial:{opacity:0},
      animate:{opacity:1},
      exit:{opacity:0}
    }
  }

  const cardsReverseVars = {
    start: {scale:0},
    end: {
      scale:1,
      transition:{type:"tween",delay:0.15},
      initial:{opacity:0},
      animate:{opacity:1},
      exit:{opacity:0}
    }
  }

  interface FormData {
    title:string;
    comment:string;
  }




  //session을 확인하고 포스트는 보되 돌려보내면 안됌.
const ChatWrite = () => {
    const router = useRouter();
    const [light,setLight] = useState(false);
    const {register,handleSubmit,formState:{errors}} = useForm<FormData>();
    const [postfn,{data,loading,error}] = useMutation("/api/chat/post");
    const {data:userCheckData} = useSWR(`/api/users/me`);
    useEffect(() => {
      if(data?.ok == true) {
        setLight(false);
      }
    },[data])
    const onPost = (data:FormData) => {
      postfn(data);
     // router.replace("/chat");
      

    }
    const onOveray =  () => {
        setLight((prev) => !prev)
    }

    return (
        <>
        {userCheckData?.ok ? (light ? 
  (<motion.div        
    variants={cardsVars}
    initial="start"
    animate="end"  
    className="w-full h-full bg-slate-500/50 absolute">
      <form method="POST" onSubmit={handleSubmit(onPost)}>
      <div className=" flex flex-row justify-center">
      <textarea {...register("title", {
        maxLength:{
          message: "Title Maximum is 20text",
          value: 20
        },
        required:true
      })}
       className=" w-2/3 h-12 fixed pb-10 top-20 text-start text-lg placeholder-sky-50" placeholder="Title" >
     </textarea>
        {errors ? <motion.div className="fixed bottom-14 left-6 bg-red-400">{errors?.title?.message}</motion.div> : null}
        <textarea {...register("comment",{
          maxLength: {
            message: "Comment Maximum is 300text",
            value: 300,
          },
          required:true
        })}
  
        className=" w-3/4 h-3/6 fixed pb-10 top-36 text-start placeholder-slate-300" placeholder="Comment">

        </textarea> 
        {errors ? <motion.div className="fixed bottom-14 left-6 bg-red-400">{errors?.comment?.message}</motion.div> : null}
      </div>
      
  <motion.button whileHover={{ scale: 0.8 }} className=" cursor-pointer w-28 h-20 fixed bottom-24 right-2/4 bg-green-500 rounded-full flex justify-center items-center"> 
     Post
  </motion.button>
  </form>
  <motion.div whileHover={{ scale: 0.8 }}  onClick={onOveray} className=" cursor-pointer w-28 h-20 fixed bottom-24 right-1/4 bg-pink-500 rounded-full flex justify-center items-center">
    Close
  </motion.div>
  </motion.div>) 
  
  :

  (<motion.button
    whileHover={{ scale: 0.8 }}
    variants={cardsReverseVars}
    initial="start"
    animate="end"  
   onClick={onOveray} className=" cursor-pointer w-28 h-20 fixed bottom-24 right-1/4 bg-blue-500 rounded-full flex justify-center items-center">
    Write
   </motion.button>)) :  null}
        
        </>
    )
}

export default ChatWrite;

