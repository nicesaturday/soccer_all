import {AnimatePresence, motion} from "framer-motion";


interface MessageProps {
    message?:any;
}




const Message = ({message}:MessageProps) => {



    return (
        <>
        <AnimatePresence>
             <motion.div  
   
                initial={{ opacity: 1, scale: 1}}
                animate={{ opacity:0 , scale: 1 }}
                transition={{ duration: 8 }}
                className="fixed bottom-24 left-5 rounded-2xl w-52 h-28 tex text-base bg-green-700 flex justify-center items-center shadow-lg">
                    {message}
                    </motion.div>
                    </AnimatePresence>
        </>
    )
}

export default Message;