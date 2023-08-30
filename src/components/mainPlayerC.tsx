import MenuLayout from "@/components/menuLayout";
import PlayerSelect from "@/components/playerSelect";
import axios from "axios";
import { useEffect, useState } from "react"
import {motion} from "framer-motion";
import { useForm } from "react-hook-form";
import Noting from "./noting";
import Image from "next/image";


interface FormAll {
    season?:number;
}



interface PlayerAll {
    player?:PlayerInfo;
    statistics?:Statistics[];
 
    
}

interface PlayerInfo {
    player?:any;
    id?:number;
    name?:string;
    photo?:string;
    statistics?:Statistics[];
}


interface Statistics {
    cards?:Cards;
    dribbles?:Dribbles;
    goals?:Goals;
    passes?:Passes;
    team?:Team;
}

interface Cards {
    yellow:number;
    red:number;
}
interface Dribbles {
    attempts:number;
    success:number;
}
interface Goals {
    total:number;
    assists:number;
}
interface Passes {
    total:number;
    key:number;
}
interface Team {
    id?:number;
    logo?:string;
}

interface Propstype {
    league:string;
}


const cardsVars = {
  start: {scale:0},
  end: {
    scale:1,
    transition:{type:"tween",delay:0.5},
    initial:{opacity:0},
    animate:{opacity:1},
    exit:{opacity:0}
  }
}





const MainPlayerC = ({league}:Propstype) => {
    const [play,setPlay] = useState<PlayerAll[]>();
    const [season,setSeason] = useState<number>(2022);
     useEffect(()=> {
        (async() => {
            const options = {
                method: 'GET',
                url: 'https://api-football-beta.p.rapidapi.com/players/topscorers',
                params: {
                  season: '2022',
                  league: league
                },
                headers: {
                  'X-RapidAPI-Key': process.env.NEXT_PUBLIC_soccer_API_KEY,
                  'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
                }
              };
              
              try {
                  console.log(league)
                  const response = await axios.request(options);
                  console.log(response.data.response.map((data:any) => data));
                  const realData:any = response.data.response.map((data:any) => data);
                  setPlay(realData)
              } catch (error) {
                  console.error(error);
              }
            
            })()

    },[]) 
    const {register,formState:{errors},handleSubmit,setError} = useForm<FormAll>();
console.log(errors.season)
const onValid = async (data:any) => {
    const options = {
        method: 'GET',
        url: 'https://api-football-beta.p.rapidapi.com/players/topscorers',
        params: {
          season: `${data.season}`,
          league: league
        },
        headers: {
          'X-RapidAPI-Key': process.env.NEXT_PUBLIC_soccer_API_KEY,
          'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
        }
      };
      
      try {
                  const response = await axios.request(options);
                  console.log(response.data.response.map((data:any) => data),"YYYY");
                  const realData:any = response.data.response.map((data:any) => data);
                  setPlay(realData)
          setSeason(data.season);
      } catch (error) {
       
      }
}
    return(

      <div className="min-w-fit h-full ">           
      <MenuLayout></MenuLayout>     
                   {  <form onSubmit={handleSubmit(onValid)} className=" font-bold"> 
              <input {...register("season", {
                minLength: {
                    message: "The season is a 4 number",
                    value: 4,
                },
                pattern: {
                   value: /^[0-9]+$/,
                   message: "write a number"
                }
              })} placeholder="Season"
              className={`${(errors.season?.type == 'pattern') ? "border-red-500" : "border-cyan-500"}`}
              />
              <button id="font" className=" bg-lime-400">search</button>
            </form>  }

            <div id="menuGrid" className="grid col-start-1 col-end-3 row-auto h-auto rounded-md shadow-lg shadow-black w-full">
             <PlayerSelect/>
             <div id="mainBoardGrid" className="grid grid-cols-auto h-auto rounded-md shadow-lg shadow-black">
                <div className="h-32">{play?.slice(0,1).map((data:any) => 
                  data?.statistics?.map((data:any,i:any) => 
                    <div key={i} className="flex justify-center h-30">
                        <Image src={data?.league?.logo} alt="img" width={50} height={50}  />
                        <div className="flex justify-center">
                          <p className="text-2xl">{season}</p>
                        <p className="text-2xl">{data?.league?.name}</p>
                        </div>
                        <Image src={data?.league?.logo}alt="img" width={50} height={50}  />
                    </div>
                  )
                )}</div>
    <div className="grid grid-rows-20 gap-5 w-full h-auto justify-center mb-5 ">
            
        {!play ? (<h4 className=" text-slate-600 flex ">Loading...</h4>) :
            
 ( 
    play?.length == 0 ? (<Noting/>) :
    (play?.map((data:PlayerInfo,i) => (
    <motion.div 
       variants={cardsVars}
       initial="start"
       animate="end"
       key={i} 
       className="flex justify-center gap-5  border-4 rounded-md shadow-lg shadow-black mr-5 ml-5">
        <div className=" text-3xl h-full hover:first-letter:">{i+1}</div>
        <div className=" w-32">
          <div>{data?.player?.name}</div>
           <Image src={data?.player?.photo} alt="img" width={50} height={50} />
        </div>
          <div>
            <ul>
                <li>Age: {data?.player?.age}</li>
                <li>Height: {data?.player?.height}</li>
                <li>Weight: {data?.player?.weight}</li>
                <li></li>
            </ul>
          </div>
            {data?.statistics?.map((data:Statistics) => (
            <div key={data.team?.id} className="flex justify-between w-full">
                <div className="w-full">
                 <div className=" flex w-64 min-w-min">
                    <p>cards: </p>
                    <p>🟨{data?.cards?.yellow}</p>
                    <p>🟥{data?.cards?.red}</p>
                  </div>
                    <div>Dribbles: {data?.dribbles?.attempts} (success : {data?.dribbles?.success})</div>
                    <div>Goals: {data?.goals?.total}</div>
                    <div>Passes: {data?.passes?.total} (key : {data?.passes?.key})</div>  
                </div>  
                <div>         
                  <Image src={data?.team?.logo!} alt="img" width={50} height={50}    />
                  </div>
            </div>
        ))}
    </motion.div>
  )))
  
  )}
  </div>
      </div>



        </div>
               </div>
 
  
           
    )
 
}

export default MainPlayerC