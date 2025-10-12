import { Link } from "react-router";
import Clue5Footer from "../components/Clue5Footer.tsx";

const Clue5 = () => {
   return (
      <div className="flex flex-col h-dvh">
         {/* Image stays fixed height */}
         <div className="shrink-0">
            <Link to={"/clue4"}>
               <img src="./appfiles/stepper/stepper5.svg" alt="wyfm" className="w-full h-auto" />
            </Link>
         </div>

         {/* Scrollable text area */}
         <div className="overflow-y-auto flex-1 mt-4 px-4">
            <h1 className="text-xl font-bold mb-2">
               Clue 5: The Currency of You
            </h1>

            <p className="mb-4">
               Somewhere between the clouds and the curve of the Earth, you unlocked the last piece. The story shifted again, only now, the magic is closer than ever. This part doesn’t need a plane ticket or a playlist. It just needs a keen eye. And maybe a little curiosity.
            </p>
            <p className="mb-4 font-bold">
               When you reach immigration, they might ask where you’re staying.{" "}
               Click{" "}
               <a href="/manage-reservation.pdf" target="_blank" rel="noopener noreferrer" className="text-pink-500 underline hover:text-pink-600 transition-colors">
                  this link
               </a>{" "}
               and show them our hotel booking.
            </p>
            <h2 className="text-lg font-semibold mb-2">What I need you to do:</h2>
            <ol className="list-decimal pl-6 space-y-2 marker:font-bold">
               <li>
                  When you land, go to any <span className="font-bold">currency conversion counter</span>.
               </li>
               <li>
                  Look for the three-letter currency code for the country you’re in.
               </li>
               <li>
                  That code, those three letters, is the password to your next and final clue, for example: <span className="font-mono">USD</span>.
               </li>
            </ol>
         </div>
         <Clue5Footer />
      </div>
   )
}
export default Clue5
