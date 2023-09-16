import { useRouter } from "next/router"
import {motion} from "framer-motion";
import Link from "next/link";


const PlayerSelect = () => {
    const router =  useRouter(); 
 
    const handleSelect = async (e:any) => {
       
       router.push(`/player/${e.target.id}`);
        
    }
    const whereI = router.asPath;

    
    return(
        
       
            <motion.div 
            
             className=" w-60 grid grid-rows-auto h-fit rounded-md shadow-lg shadow-black p-5 gap-5 ">
                <div className=" text-center border-b-4 p-2 border-black">Select League</div>
                <Link href={"/player/pl"}> <motion.div    id="pl" className={`cursor-pointer rounded-md  ${"/player/pl" == whereI ? "bg-lime-400" : null}  hover:bg-lime-400 rounded-md`}>PL</motion.div> </Link>
                <Link href={"/player/l1"}><motion.div   id="l1" className={`cursor-pointer rounded-md  ${"/player/l1" == whereI ? "bg-lime-400" : null}  hover:bg-lime-400 rounded-md`}>L1</motion.div></Link>
                <Link href={"/player/uefa"}><motion.div   id="uefa" className={`cursor-pointer rounded-md  ${"/player/uefa" == whereI ? "bg-lime-400" : null}  hover:bg-lime-400 rounded-md`}>UEFA</motion.div></Link>
                <Link href={"/player/laliga"}><motion.div   id="laliga" className={`cursor-pointer rounded-md  ${"/player/laliga" == whereI ? "bg-lime-400" : null}  hover:bg-lime-400 rounded-md`}>LALIGA</motion.div></Link>
            </motion.div>
       
    )
}

export default PlayerSelect;