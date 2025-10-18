import Clue1Footer from "../components/Clue1Footer.tsx";
import { Link } from "react-router";

const Clue1 = () => {
   return (
      <div className="flex flex-col h-dvh">
         {/* Image stays fixed height */}
         <div className="shrink-0">
            <Link to={"/intro"}>
               <img src="./appfiles/stepper/stepper1.svg" alt="wyfm" className="w-full h-auto" />
            </Link>
         </div>

         {/* Scrollable text area */}
         <div className="overflow-y-auto flex-1 mt-4 px-4">
            <h1 className="text-xl font-bold mb-2">
               Clue 1: Runway Rendezvous
            </h1>
            <p className="mb-4">
               You didn’t wake up expecting this. But here you are, standing at the edge of something real, exciting, and just a little bit wild. You've always been brave. I’m just giving you a story that deserves your courage. I know this might feel fast. Surreal. Slightly insane. Maybe very insane. But you’re not alone in this, I’ve thought through every step. The next page of this story isn’t in your hands yet… it’s waiting in the clouds.
            </p>
            <h2 className="text-lg font-semibold mb-2">What I need you to do:</h2>
            <ol className="list-decimal pl-6 space-y-2 marker:font-bold">
               <li>
                  <span className="font-bold">Bookmark this site on your phone now.</span>
               </li>
               <li>
                  Pack a small bag. Just enough for two days, small enough so you don’t need to check it. Clothes that let you breathe, walk, nap. Layers you can shed if it gets warm. Skip the winter coat, you won’t need it.
               </li>
               <li>
                  <span className="font-bold">No passport, just ID and a phone charger.</span>
               </li>
               <li>Call a Lyft. Be at the airport by <span className="font-bold">8:30AM (November 15th)</span>.</li>
               <li>Go to the Frontier kiosk and print your boarding pass. Your confirmation code is: <span className="font-bold">UK879K</span>.</li>
               <li>Board your flight.</li>
               <li>
                  The password to your next clue (<span className="italic">Shadow Landing</span>) is your flight number, for example: <span className="font-mono">F72456</span>.
               </li>
            </ol>
         </div>

         <Clue1Footer />
      </div>
   )
}
export default Clue1
