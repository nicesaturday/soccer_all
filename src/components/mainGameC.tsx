import GameSelect from "@/components/gameSelect";
import MenuLayout from "@/components/menuLayout";
import Noting from "@/components/noting";
import axios from "axios";
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import { TlsOptions } from "tls";
import {motion} from "framer-motion";
import Image from "next/image";


interface FormAll {
    season?:number;
}


interface TopInfo {
    league?:League;
    length?:number;
}
interface League {
    logo?:string;
    name?:string;
    season?:number;
    standings?:Standings[];
}

interface Standings {
    standingsData?:StandingsData[];
}
interface StandingsData {
    all?:All;
    team?:Team;
    rank?:number;
    group?:string;
}
interface All {
    win?:number;
    lose?:number;
    draw?:number;
}
interface Team {
    logo?:string;
}

interface propsLeague {
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

const MainGameC =  ({league}:propsLeague) => {
   const [game,setGame] = useState<TopInfo[]>();
    useEffect(()=>{
        (async ()=> {

            const options = {
                method: 'GET',
                url: 'https://api-football-beta.p.rapidapi.com/standings',
                params: {
                  season: '2021',
                  league: league
                },
                headers: {
                  'X-RapidAPI-Key': process.env.NEXT_PUBLIC_soccer_API_KEY,
                  'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
                }
              };
              
              try {
                  const response = await axios.request(options);
                  setGame(response.data.response);
              } catch (error) {
               
              }
        })()
    },[setGame]) 

const {register,formState:{errors},handleSubmit,setError} = useForm<FormAll>();
const onValid = async (data:any) => {
    const options = {
        method: 'GET',
        url: 'https://api-football-beta.p.rapidapi.com/standings',
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
          setGame(response.data.response);
      } catch (error) {
       
      }
}



    return (
        <div>
              <MenuLayout title="게임"></MenuLayout>
                      {  <form onSubmit={handleSubmit(onValid)}> 
              <input {...register("season", {
                minLength: {
                    message: "The season is a 4 number",
                    value: 4
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
             <div id="menuGrid">
         <GameSelect />
            {!game ? ( <h4 className=" text-2xl w-full h-full flex justify-center items-center">Loading...</h4>) 
            :
            (game?.length == 0 ? (<Noting/>) : 
                       (game?.map((data:TopInfo,i) => (
                            <motion.div
                                variants={cardsVars}
                                initial="start"
                                animate="end" 
                                key={i} 
                                className="grid grid-rows-auto h-auto rounded-md shadow-lg shadow-black">
                              <div className="flex justify-end pr-5 gap-5">
                              <h3 className=" text-5xl text-center">{data?.league?.season}</h3>
                              <div className=" text-5xl text-center">{data?.league?.name}</div>
                               <div className="flex justify-around pb-7">
                               <Image src={data?.league?.logo!} className=" w-36 h-36" width={50} height={50} alt="img"/>
                              </div>
                              </div>
                                {data?.league?.standings?.map((data:any,i) => (
                                    <div key={i} className="  border-black border-b-2 m-2">
                                    {data?.map((data:StandingsData,i:any) => (
                                        <div key={i} className="grid grid-flow-col">
                                            <div>
                                                {data?.group}
                                            </div>
                                        <div className="flex h-8 ">
                                            <div>
                                                {i+1}
                                            </div>
                                            <div>
                                                <Image src={data?.team?.logo!} className=" w-8 h-8" width={50} height={50} alt="img"/>
                                            </div>
                                            <div className="flex">
                                               <div>win:{data?.all?.win}</div>
                                               <div>lose:{data?.all?.lose}</div>
                                               <div>draw:{data?.all?.draw}</div>
                                            </div>
                                            </div>


                                        </div>
                                    ))}
                                    </div>
                                ))}
                                </motion.div>
                        )))
            )}
           </div>
        </div>
    )
}

export default MainGameC