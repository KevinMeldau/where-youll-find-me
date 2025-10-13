import { Link } from "react-router";

const LandingPage = () => {
   return (
      <div className="w-full h-dvh bg-primary flex flex-col items-center justify-center">
         <h1 className="text-center font-bold text-whitef !text-[44px]">
            Ready for <br/> an Adventure?
         </h1>

         <Link to={"/intro"} className="pulse-ring-wrapper w-[200px] h-[200px] mt-10">
           <span className="relative flex w-[200px] h-[200px]">
             <span
                className="absolute inline-flex h-full w-full animate-[ping_2.5s_linear_infinite] rounded-full bg-whitef opacity-75"
             ></span>
             <span
                className="relative inline-flex w-[200px] h-[200px] rounded-full bg-whitef flex items-center justify-center text-center text-blackf font-bold text-[24px] cursor-pointer select-none"
             >Tap when <br/> you’re ready.</span>
           </span>
         </Link>
      </div>
   )
}
export default LandingPage
