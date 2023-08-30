import { useState } from "react"


interface UseMutationState<T> {
    loading: boolean;
    data?: T;
    error?: object;
}


type UseMutationResult<T> = [(data:any) => void, UseMutationState<T>];

export default function useMutation<T = any>(url:string):UseMutationResult<T> {
    const [state,setState] = useState<UseMutationState<T>>({
        loading:false,
        data:undefined, //  /api/user/enter 에는 null이 들어오지만 undefined<T> 로 해서 withhandler에서 걸러진다. (data 오류)
        error:undefined
    });
console.log(state,"HHA")
function enter(data:any) {
    setState((prev) => ({...prev,loading:true}));
    fetch(url,{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then((response)=> response.json()).catch(()=>{})
    .then(((data)=> setState((prev)=>({...prev , data}))))
    .catch((error)=>setState((prev)=>({...prev,error}))) //ok nope 줌
    .finally(()=>setState((prev)=>({...prev,loading:false})))//enter fetch 과정 끝나고 쿨다운
}




    return [enter,{...state}]
}