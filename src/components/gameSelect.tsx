import { useRouter } from "next/router";


const GameSelect = () => {
    const router =  useRouter(); 
   
    const handleSelect = async (e:any) => {
        router.push(`/game/${e.target.id}`);
    }
    const whereI = router.asPath;


    
    return(
        
    <div className=" w-60 grid grid-rows-auto h-fit rounded-md shadow-lg shadow-black p-5 gap-5 ">
        <div className=" text-center border-b-4 p-2 border-black">Select League</div>
        <div onClick={handleSelect} id="pl" className={`cursor-pointer rounded-md  hover:bg-lime-400  ${"/game/pl" == whereI ? "bg-lime-400" : null}` }>PL</div>
        <div onClick={handleSelect} id="l1" className={`cursor-pointer rounded-md hover:bg-lime-400 ${"/game/l1" == whereI ? "bg-lime-400" : null}`}>L1</div>
        <div onClick={handleSelect} id="uefa" className={`cursor-pointer rounded-md hover:bg-lime-400 ${"/game/uefa" == whereI ? "bg-lime-400" : null}`}>UEFA</div>
        <div onClick={handleSelect} id="laliga" className={`cursor-pointer rounded-md hover:bg-lime-400 ${"/game/laliga" == whereI ? "bg-lime-400" : null}`}>LALIGA</div>
    </div>
    
    )
}

export default GameSelect;