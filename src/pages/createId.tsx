import MenuLayout from "@/components/menuLayout";
import Message from "@/components/message";
import useMutation from "@/libs/client/useMutation";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";



interface createForm {
    email:string;
    password:string;
    passwordCheck:string;
    name:string;
}


interface CreateMutationResult {
  ok: boolean;
  createdOk:boolean;
  emailOk:boolean;
  passwordCheckOk:boolean;
  nameOk:boolean;


} 




const CreateId = () => {

   const router = useRouter();
   const {register,handleSubmit} = useForm<createForm>();
   const [enter,{loading,error,data}] = useMutation<CreateMutationResult>(`/api/users/create`);
   const onValid = (d:createForm) => {
    console.log(d,"eee")
     enter(d) //데이터 서버에 넣고 res.data가져옴
   }
   if(data?.createdOk == true) {
    router.replace({
      pathname: `/login`,
      query: {created:"Success created your id !!"},

    },
    "/login"
    );
    
   }
   console.log(error,"QQAAS")
   console.log(data,"TTTAS");
    return(
        <>
        <MenuLayout />
        <form onSubmit={handleSubmit(onValid)} className="flex flex-col justify-center items-center h-full pt-12 gap-8">
          <input {...register("email",{ required:true} )} placeholder="Email"/>
          {data?.emailOk ?  <div id="createError">It&apos;s already exists email</div> : null}
          <input {...register("password", {required:true})} placeholder="Password"/>      
          {data?.passwordCheckOk ?  <div id="createError">Password is not same</div> : null}
          <input {...register("passwordCheck", {required:true})} placeholder="PassworCheck"/>  
  
          <input {...register("name", {required:true})} placeholder="Nickname"/>    
          {data?.nameOk ?  <div id="createError">It&apos;s already exists name</div> : null}  
        {loading ?<button className=" bg-lime-700">Loading...</button> : <button className=" bg-lime-500">Create New Id</button>}
        {router.query.loginMessage ? <Message message={router.query.loginMessage}></Message> : null}    
      </form>
    </>
    )
}

export default CreateId;