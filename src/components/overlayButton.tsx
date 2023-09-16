import { useState,useEffect } from "react";
import { motion } from "framer-motion"; 
import { useRouter } from "next/router";
import useSWR from "swr";
import { set } from "react-hook-form";
import { useWindowSize } from "@uidotdev/usehooks";


interface LogOut {
  ok:boolean;
}


const OverLay = () => {
  const {data,mutate} = useSWR("/api/users/me"); //로그인 쿠키 확인 (재로그인 방지)
  const router = useRouter();
    const onLogin = () => {
        router.push(`/login`);
    }
    const onCreate = () => {
      router.push(`/createId`);
    }
    const onLogout = async () => {
      const data = await fetch("/api/users/out").then((response) => response.json())
      if(data?.ok) {
        if(router.pathname == '/') {
         await router.replace({
            pathname: `/`,
            query: {logoutMessage:"Logouted!!"}
          },`/`);
          router.reload(); // 메인페이지에서 로그 아웃시에 리로드로 화면 클리어
        } else {
          router.push({
            pathname: `/`,
            query: {logoutMessage:"Logouted!!"}
          },`/`);
        }
      } else{
        router.push({
          pathname: `/`,
          query: {logoutMessage:"it was failed"}  //이상 경로 확인
        },`/`);
      }
    }

    
    const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;
    const isAndroid = Boolean(userAgent.match(/Android/i));
    const isIos = Boolean(userAgent.match(/iPhone|iPad|iPod/i));
  
 

    return (
      
          <div className="w-full h-full flex  absolute bg-slate-500/50">
            <motion.div
             initial={{ scale:0 }}
             animate={{ scale:1 ,transition:{duration:0.5 , delay:0.5}}}
             transition={{type:"spring", stiffness:1, damping:1, bounce: 0.5}} 
            className=" w-44 h-56 bg-gray-600 bottom-48 right-5 rounded-md fixed flex justify-center flex-col items-center gap-5">
                <div className=" border-b-4 border-neutral-100 w-36 justify-start">Menu</div>
             
                  {data?.ok ? <div id="font" onClick={onLogout} className=" cursor-pointer">Logout</div> : <div id="font" onClick={onLogin} className=" cursor-pointer">Login</div>}
                  <div id="font" onClick={onCreate} className=" cursor-pointer">Create Id</div>

            </motion.div>
          </div>
        
    )
}

    const OverlayButton = () => {
        const [blackClick,setBlackClick] = useState(false);
        const router = useRouter();
        const toggleBlack = () => {
            setBlackClick((prev) => !prev);
        
        }
       
   
        return (
                <>

                 {blackClick ? <OverLay /> : null}
                 <motion.button whileHover={{ scale: 0.8 }} onClick={toggleBlack} className=" w-20 h-20 fixed flex justify-center items-center bottom-24 right-5 bg-slate-400 rounded-full">
               <svg className="w-10 h-14 " height="12" viewBox="0 0 32 32" width="12" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="1" id="_1"><path d="M27,3V29a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V27H7v1H25V4H7V7H5V3A1,1,0,0,1,6,2H26A1,1,0,0,1,27,3ZM12.29,20.29l1.42,1.42,5-5a1,1,0,0,0,0-1.42l-5-5-1.42,1.42L15.59,15H5v2H15.59Z" id="login_account_enter_door"/></g></svg>
                 </motion.button>
           
                </>
    )
        }
    export default OverlayButton;