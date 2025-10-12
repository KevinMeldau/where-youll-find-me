import { Link } from "react-router";
import Clue3Footer from "../components/Clue3Footer.tsx";

const Clue3 = () => {
   return (
      <div className="flex flex-col h-dvh">
         {/* Image stays fixed height */}
         <div className="shrink-0">
            <Link to={"/clue2"}>
               <img src="./appfiles/stepper/stepper3.svg" alt="wyfm" className="w-full h-auto" />
            </Link>
         </div>

         {/* Scrollable text area */}
         <div className="overflow-y-auto flex-1 mt-4 px-4">
            <h1 className="text-xl font-bold mb-2">
               Clue 3: Clearance to Dream
            </h1>

            <p className="mb-4">
               You’re about to take another leap, one that leaves behind the familiar and steps into something wilder, more unknown. What matters is the direction: forward. You don’t have to see the entire journey, just trust that you’re exactly where you’re meant to be.
            </p>

            <h2 className="text-lg font-semibold mb-2">What I need you to do:</h2>
            <ol className="list-decimal pl-6 space-y-2 marker:font-bold">
               <li>
                  Go back to <span className="font-bold">LAX</span>, be there by <span className="font-bold">8:30PM (November 15th).</span>
               </li>
               <li>
                  When you get there, go to the Delta kiosk and print your boarding pass. Your ticket number is: <span className="font-bold">0062364065840</span>.
               </li>
               <li>
                  <span className="font-bold">Make sure you sign up for wifi for this flight.</span>
               </li>
               <li>
                  The password to your next clue (<span className="italic">The Line Between</span>) is your flight number, for example: <span className="font-mono">DL8846</span>.
               </li>
            </ol>
         </div>

         <Clue3Footer />
      </div>
   )
}
export default Clue3
