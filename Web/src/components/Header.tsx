import { GoogleLogo, Moon } from "phosphor-react";
import sunImg from "../image/sun.svg"

export function Header(){
 return(
    <header className="bg-transparent px-4 flex items-center justify-between w-full mx-auto max-w-[1600px] h-20 lg:px-[169px] ">
        <div>
         <h1  className="text-zinc-100 dark:text-zinc-900 text-xl sm:sr-only lg:not-sr-only" >Feedback<span className="text-violet-500">.io</span> </h1> 
        </div>
        <div className="flex items-center gap-3">
            <button
            type="button"
             className="bg-brand-500 flex flex-row  justify-center items-center w-24 h-10 gap-2  rounded-md text-zinc-100 text-md hover:bg-brand-300 transition-colors">
            <GoogleLogo className="w-5 h-5 " weight="bold"/> 
            <p className="border-l-2 pl-2">Login</p>
            </button>
        <div id="image" className="w-24 h-10 rounded-full flex items-center">
            <Moon  size={24} color="#b16620" />
        </div>
        </div>
    </header>
 )

}