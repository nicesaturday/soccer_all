import MenuLayout from "@/components/menuLayout";
import Message from "@/components/message";
import { NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router";
import YouTube ,{ YouTubeProps } from "react-youtube";





const Home:NextPage = () => {
  const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;
  const isAndroid = Boolean(userAgent.match(/Android/i));
  const isIos = Boolean(userAgent.match(/iPhone|iPad|iPod/i));

  const router = useRouter();
 
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  const opts: YouTubeProps['opts'] = {
    height: isAndroid || isIos ? '390' : '400'  ,
    width: isAndroid || isIos ? '370' : '650' ,
    color: `blue`,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

    return (
        <div className=" text-cyan-500">
          

        <MenuLayout  title="홈">
            <Head>
                <title id="font">SOCCER ALL</title>
            </Head>

        </MenuLayout>
        <div id="font" className="text-cyan-500 flex justify-center pb-15">WELCOME</div>
           
           <div className="flex flex-row justify-center pb-5">
           <YouTube videoId="RejKwZVb7w4" opts={opts} onReady={onPlayerReady} className=" w-full h-full flex justify-center" />
           </div>
           {router.query.logoutMessage ?  <Message message={router.query.logoutMessage}></Message> : null}   
           {router.query.loginMessage ? <Message message={router.query.loginMessage}></Message> : null}    
        </div>
    )
}

export default Home;