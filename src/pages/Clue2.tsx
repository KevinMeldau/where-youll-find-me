import { Link } from "react-router";
import Clue2Footer from "../components/Clue2Footer.tsx";

const Clue2 = () => {
   return (
      <div className="flex flex-col h-dvh">
         {/* Image stays fixed height */}
         <div className="shrink-0">
            <Link to={"/clue1"}>
               <img src="./appfiles/stepper/stepper2.svg" alt="wyfm" className="w-full h-auto" />
            </Link>
         </div>

         {/* Scrollable text area */}
         <div className="overflow-y-auto flex-1 mt-4 px-4">
            <h1 className="text-xl font-bold mb-2">
               Clue 2: Shadow Landing
            </h1>
            <p className="mb-4">
               You’ve landed. You’re not just moving through terminals, you’re moving through a story. One that’s been hidden in the rhythm of small things, waiting for the right eyes to notice. I’ve thought through every step, so you don’t have to. Just follow along, and enjoy what’s waiting.
            </p>

            <h2 className="text-lg font-semibold mb-2">What I need you to do:</h2>
            <ol className="list-decimal pl-6 space-y-2 marker:font-bold">
               <li>
                  Make your way to the <span className="font-bold">Hilton Los Angeles Airport.</span> The address is: <span className="font-bold">5711 West Century Boulevard, Los Angeles</span>. You’ll find the Hilton Honors app already installed on your phone, inside a folder called Travel.
               </li>
               <li>Open the app. Your digital room key will be waiting for you, no front desk checkin needed. If for some reason the app does not work, go to the front desk and get a key card.</li>
               <li>Go to your room. Eat something. Take a hot shower. Put your feet up. Sleep, you’ll need it.</li>
               <li>At 7:00PM (not before, I’ll know), open the safe in your room. The code for the safe is the <span className="font-bold">year you were born</span>. Inside the safe is what you’ll need to continue this adventure.</li>
               <li>
                  You’ll also find the password to your next clue (<span className="italic">Clearance to Dream</span>).
               </li>
            </ol>
         </div>
         <Clue2Footer />
      </div>
   )
}
export default Clue2
