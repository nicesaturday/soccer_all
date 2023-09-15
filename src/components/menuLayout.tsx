import Link from "next/link"
import { ReactNode } from "react";
import {motion} from "framer-motion";


interface LayoutProps {
    title?: string;
    children?:ReactNode;
}


export default function MenuLayout ({
    title,
    children
}:LayoutProps) {
    return(
        <div className=" pb-20">
        <div className="flex w-full h-16 text-cyan-400 bg-white justify-around fixed rounded-md shadow-lg shadow-black border-x-8 border-y-8 border-slate-300">
            <nav>
            <Link href="/" legacyBehavior>
                <motion.p whileHover={{ scale: 1.15 }} className=" cursor-pointer hover:bg-blue-700">
             <svg enable-background="new 0 0 50 50" height="50px" id="Layer_1" version="1.1" viewBox="0 0 50 50" width="50px"><rect fill="none" height="50" width="50"/><g><path d="   M25,2C12.299,2,2,12.298,2,25s10.299,23,23,23s23-10.298,23-23S37.701,2,25,2L25,2z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/></g><polygon fill="none" points="  18.71,34.719 14.801,22.657 25.026,15.203 35.253,22.657 31.348,34.719 " stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><polyline fill="none" points="  33.738,3.788 25.026,7.505 16.316,3.788 " stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><polyline fill="none" points="  7.646,10.106 8.483,19.569 2.263,26.729 " stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><polyline fill="none" points="  5.576,36.957 14.803,39.082 19.672,47.228 " stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><polyline fill="none" points="  30.388,47.228 35.253,39.078 44.477,36.953 " stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><polyline fill="none" points="  47.793,26.727 41.568,19.563 42.404,10.106 " stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="25.026" x2="25.026" y1="7.505" y2="15.203"/><line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="35.253" x2="41.568" y1="22.956" y2="19.563"/><line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="31.348" x2="35.253" y1="34.719" y2="39.078"/><line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="18.71" x2="14.803" y1="34.719" y2="39.082"/><line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="8.483" x2="14.801" y1="19.569" y2="22.657"/></svg>
                </motion.p>
            </Link>
            </nav>
            <nav className="">
                <Link href="/player/pl" legacyBehavior>
                <motion.p whileHover={{ scale: 1.15  }}  className=" cursor-pointer hover:bg-blue-700">
                <svg enable-background="new 0 0 32 32" height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xmlns="http://www.w3.org/2000/svg" ><g id="ball"/><g id="wistle"/><g id="pitch"/><g id="goal"/><g id="socks"/><g id="shoe"/><g id="jersey"/><g id="bottle"/><g id="shorts"/><g id="corner"/><g id="winner"/><g id="trophy"><path d="M30.243,2.03l-4-1C26.163,1.01,26.082,1,26,1h-6c-0.552,0-1,0.448-1,1c0,1.654-1.346,3-3,3s-3-1.346-3-3   c0-0.552-0.448-1-1-1H6C5.918,1,5.837,1.01,5.757,1.03l-4,1C1.313,2.141,1,2.541,1,3v6c0,0.459,0.313,0.859,0.757,0.97L5,10.781V26   c0,0.552,0.448,1,1,1h20c0.552,0,1-0.448,1-1V10.781l3.243-0.811C30.688,9.859,31,9.459,31,9V3C31,2.541,30.688,2.141,30.243,2.03z    M29,8.219L25.757,9.03C25.313,9.141,25,9.541,25,10v15H7V10c0-0.459-0.313-0.859-0.757-0.97L3,8.219V3.781L6.123,3h4.978   C11.566,5.279,13.585,7,16,7s4.434-1.721,4.899-4h4.978L29,3.781V8.219z"/><path d="M16,11c-1.654,0-3,1.346-3,3c0,1.654,1.346,3,3,3c0.353,0,0.686-0.072,1-0.184V18l0,0c0,0,0,0,0,0c0,0.551-0.449,1-1,1   s-1-0.448-1-1c0-0.552-0.448-1-1-1s-1,0.448-1,1c0,1.654,1.346,3,3,3s3-1.346,3-3c0,0,0,0,0,0l0,0v-4C19,12.346,17.654,11,16,11z    M16,15c-0.551,0-1-0.449-1-1s0.449-1,1-1s1,0.448,1,1S16.551,15,16,15z"/><path d="M30,29h-8c-0.552,0-1,0.448-1,1s0.448,1,1,1h8c0.552,0,1-0.448,1-1S30.552,29,30,29z"/><path d="M19,29h-2c-0.552,0-1,0.448-1,1s0.448,1,1,1h2c0.552,0,1-0.448,1-1S19.552,29,19,29z"/><path d="M14,29H2c-0.552,0-1,0.448-1,1s0.448,1,1,1h12c0.552,0,1-0.448,1-1S14.552,29,14,29z"/></g><g id="substitution"/><g id="medal_award"/><g id="strategy"/><g id="card"/><g id="gloves"/><g id="stadium"/><g id="keeper"/><g id="time"/><g id="horns"/><g id="flag"/><g id="referee"/><g id="player"/><g id="injury"/><g id="supporter"/><g id="coach"/><g id="cone"/><g id="captain"/><g id="match"/><g id="score"/><g id="celender"/><g id="grass"/><g id="game"/><g id="subsitutions"/><g id="bench"/></svg>
                 </motion.p>
                </Link>
            </nav>
            <nav>
                <Link href="/game/pl" legacyBehavior>
                    <motion.p whileHover={{ scale: 1.15 }} className=" cursor-pointer hover:bg-blue-700">
                   <svg height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xmlns="http://www.w3.org/2000/svg" ><g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1"><g fill="#929292" id="icon-7-soccer-court"><path d="M2,21 L2,24.0025781 C2,25.1057238 2.89971268,26 3.99328744,26 L16,26 L16,26 L16,20.9725356 C13.7500247,20.7238135 12,18.8162769 12,16.5 C12,14.1837231 13.7500247,12.2761865 16,12.0274644 L16,7 L3.99328744,7 C2.89242519,7 2,7.89092539 2,8.99742191 L2,12 L7,12 L7,21 L2,21 L2,21 L2,21 Z M31,21 L31,24.0025781 C31,25.1090746 30.1075748,26 29.0067126,26 L17,26 L17,26 L17,20.9725356 C19.2499753,20.7238135 21,18.8162769 21,16.5 C21,14.1837231 19.2499753,12.2761865 17,12.0274644 L17,7 L29.0067126,7 C30.1002873,7 31,7.89427625 31,8.99742191 L31,12 L26,12 L26,21 L31,21 L31,21 L31,21 Z M17,19.9645556 C18.6961471,19.7219408 20,18.263236 20,16.5 C20,14.736764 18.6961471,13.2780592 17,13.0354444 L17,19.9645556 L17,19.9645556 L17,19.9645556 Z M16,13.0354444 C14.3038529,13.2780592 13,14.736764 13,16.5 C13,18.263236 14.3038529,19.7219408 16,19.9645556 L16,13.0354444 L16,13.0354444 Z M27,13 L27,20 L31,20 L31,13 L27,13 L27,13 Z M2,13 L2,20 L6,20 L6,13 L2,13 L2,13 Z" id="soccer-court"/></g></g>
                   </svg>
                   </motion.p>
                </Link>
            </nav>
            <nav>
                <Link href="/chat" legacyBehavior>
                 <motion.p whileHover={{ scale: 1.15 }} className=" cursor-pointer hover:bg-blue-700">
                  <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.75 15C15.7165 15 16.5 15.7835 16.5 16.75L16.4989 17.7121C16.6156 19.9012 14.9879 21.009 12.0668 21.009C9.15786 21.009 7.5 19.9192 7.5 17.75V16.75C7.5 15.7835 8.2835 15 9.25 15H14.75ZM3.75 10L8.126 10.0001C8.04375 10.3197 8 10.6547 8 11C8 12.1155 8.45665 13.1244 9.1932 13.8499L9.35526 14.001L9.25 14C8.94865 14 8.65863 14.0485 8.38729 14.138C7.52255 14.4235 6.84765 15.1264 6.60122 16.0082L6.56679 16.009C3.65786 16.009 2 14.9192 2 12.75V11.75C2 10.7835 2.7835 10 3.75 10ZM20.25 10C21.2165 10 22 10.7835 22 11.75L21.9989 12.7121C22.1156 14.9012 20.4879 16.009 17.5668 16.009L17.3985 16.0073C17.1596 15.1534 16.5188 14.4673 15.6929 14.1659C15.4576 14.08 15.2073 14.0254 14.947 14.0069L14.75 14L14.6447 14.001C15.4758 13.268 16 12.1952 16 11C16 10.6547 15.9563 10.3197 15.874 10.0001L20.25 10ZM12 8C13.6569 8 15 9.34315 15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8ZM6.5 3C8.15685 3 9.5 4.34315 9.5 6C9.5 7.65685 8.15685 9 6.5 9C4.84315 9 3.5 7.65685 3.5 6C3.5 4.34315 4.84315 3 6.5 3ZM17.5 3C19.1569 3 20.5 4.34315 20.5 6C20.5 7.65685 19.1569 9 17.5 9C15.8431 9 14.5 7.65685 14.5 6C14.5 4.34315 15.8431 3 17.5 3Z" fill="#212121"/></svg>
                 </motion.p>
                </Link>
            </nav>
        </div>
        </div>
    )
}