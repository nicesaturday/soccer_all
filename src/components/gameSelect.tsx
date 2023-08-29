import { useRouter } from "next/router";


const GameSelect = () => {
    const router =  useRouter(); 
   
    const handleSelect = async (e:any) => {
        router.push(`/game/${e.target.id}`);
    }
    


    
    return(
        
    <div onClick={handleSelect} className=" w-60 grid grid-rows-auto h-fit rounded-md shadow-lg shadow-black p-5 gap-5 ">
        <div className=" text-center border-b-4 p-2 border-black">Select League</div>
        <div id="pl" className=" cursor-pointer">PL</div>
        <div id="l1" className=" cursor-pointer">L1</div>
        <div id="uefa" className=" cursor-pointer">UEFA</div>
        <div id="laliga" className=" cursor-pointer">LALIGA</div>
    </div>
    
    )
}

export default GameSelect;