import {motion} from "framer-motion";
import { useRouter } from "next/router";
import MenuLayout from "@/components/menuLayout";
import useSWR from "swr";
import { useForm } from "react-hook-form";
import useMutation from "@/libs/client/useMutation";
import axios from "axios";


interface ChatData {
  ok:boolean;
  dataAll:DataAll[];
}

interface DataAll {
  id:any;
  title:string;
  comment:string;
}

interface UnderSwrData {
  underChatData : UnderChatData[];
}

interface UnderChatData {
  id:number;
  comment:string;
  user:User;
}

interface User {
  name:string;
}

const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

const ChatLayout = () => {
     const router = useRouter();
     const {id} = router.query;
     const {register,handleSubmit} = useForm();
     const {data} = useSWR(id ? `/api/chat?id=${id}`  : null);
     const [fn,{data:postData,loading,error}] = useMutation(`/api/chat/underChat?id=${id}`);
     const {data:underChatData} = useSWR<UnderSwrData>(id ? `/api/chat/underChat?id=${id}`  : null)
     const {data:userCheckData} = useSWR(`/api/users/me`);
     const onhandleSubmit = (data:any) => {
      fn(data);
     }



    return (
      <div className="min-w-fit h-full">
  <MenuLayout/>
   <div id="chatMainGrid">
   <div className=" w-60 grid grid-rows-auto h-fit rounded-md shadow-lg shadow-black p-5 gap-5 ">
     <span className=" text-center border-b-4 border-stone-900 pb-4">Category</span>
     <span className="cursor-pointer">The Best Like</span>
     <span className="cursor-pointer">Many Views</span>
   </div>
   <div>
          <motion.div 
                  animate={{
                    scale: [1],
                    rotate: [0],
                  }}
                
                  className=" h-auto rounded-md shadow-lg shadow-black m-5  gap-5 p-5 mb-20"
             
                  >
                    <motion.div className=" pb-5 border-b-2 border-slate-950">Title : {data?.data.title}</motion.div>
                    <motion.div className=" pt-5">{data?.data.comment}</motion.div>
                </motion.div>
  <form onSubmit={handleSubmit(onhandleSubmit)}>
     <div id="mainBoardGrid" className="grid grid-cols-auto h-auto rounded-md shadow-lg shadow-black">
    
       {userCheckData?.ok ? (
        <>
          <textarea {...register("comment")} className=" bg-slate-500/50 rounded-2xl mr-5/2 ml-5/2"></textarea>
          <button className=" bg-green-400 place-self-end w-20 mr-5 mt-5">Post</button>
        </>
       ): null}
       <div className="pl-2">Comment</div>
       <motion.div 
                  animate={{
                    scale: [1],
                    rotate: [0],
                  }}
                
                  className="grid grid-cols-auto h-auto rounded-md shadow-lg shadow-black m-5  gap-5 p-5"
             
                  >
                    {underChatData ? underChatData.underChatData.map((data) => 
                    
                    <div key={data.id}>
                      <div className=" border-b-2 border-slate-950 pb-2">
                        {data.user.name}
                      </div>
                    <div className="pt-2">
                      {data.comment}
                    </div>
                    </div>
                    ) : null }
  
                </motion.div>
             
                
     </div>
     </form>
     </div>
    </div>
 </div>
    )
}

export default ChatLayout;