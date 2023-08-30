import ChatWrite from "@/components/chatWrite";
import MenuLayout from "@/components/menuLayout";
import useSWR from "swr";
import {motion} from "framer-motion";
import {useState} from "react";
import { useRouter } from "next/router";
import Link from "next/link";



interface ChatData {
  ok:boolean;
  dataAll:DataAll[];
}


interface DataAll {
  id:number;
  title:string;
  comment:string;
}


const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}



const Chat = () => {
  const router = useRouter();
  const {data,isLoading} = useSWR<ChatData>("/api/chat/get");
   
  const [isOpen,setIsOpen] = useState();



    return (
        <div className="min-w-fit h-full">
             <ChatWrite />
         <MenuLayout/>
          <div id="chatMainGrid">
          <div className=" w-60 grid grid-rows-auto h-fit rounded-md shadow-lg shadow-black p-5 gap-5 ">
            <span className=" text-center border-b-4 border-stone-900 pb-4">Category</span>
            <span className="cursor-pointer">The Best Like</span>
            <span className="cursor-pointer">Many Views</span>
          </div>
            <div id="mainBoardGrid" className="grid grid-cols-auto h-auto rounded-md shadow-lg shadow-black">
                {isLoading ? <h4 className=" text-slate-600 text-center mt-5">Loading...</h4> : data ? data.dataAll.map((data) => (
                  <div onClick={() => router.push(`/chat/users?id=${data.id}`)  } key={data.id} >
                    
                  <motion.div 
                  animate={{
                    scale: [1],
                    rotate: [0],
                  }}
                  whileHover={{scale:1.08}}
                  className="grid grid-cols-auto h-auto rounded-md shadow-lg shadow-black m-5 cursor-pointer gap-5 p-5"
             
                  >
                    <motion.div>Title : {data.title}</motion.div>
                    <motion.div>{data.comment}</motion.div>
                  </motion.div>
                  </div>
                ))  : null}
            </div>
           </div>
        </div>
    )
}

export default Chat;