import { useRouter } from "next/router";
import {useState,useEffect} from "react";
import useSWR from "swr";




export default function useUser(){
    const {data,error} = useSWR(`/api/users/me`);
    const router = useRouter();
    useEffect(()=>{
        if(data && !data?.ok) {
         router.replace("/login")
        }
},[data,router]);

    return {user:data?.profile , isloading: !data && !error};
}//미들웨어