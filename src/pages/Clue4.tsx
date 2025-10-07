import { Link } from "react-router";
import Clue4Footer from "../components/Clue4Footer.tsx";

const Clue4 = () => {
   return (
      <div className="flex flex-col h-dvh">
         {/* Image stays fixed height */}
         <div className="shrink-0">
            <Link to={"/clue3"}>
               <img src="./appfiles/stepper/stepper4.svg" alt="wyfm" className="w-full h-auto" />
            </Link>
         </div>

         {/* Scrollable text area */}
         <div className="overflow-y-auto flex-1 mt-4 px-4">
            <h1 className="text-xl font-bold mb-2">
               Clue 4: The Line Between
            </h1>

            <p className="mb-4">
               You’re in the air now—somewhere between yesterday and whatever comes next. This isn’t a clue you can rush. It’s one you have to feel. It doesn’t speak loudly. It waits to be heard by you and only you. Because the answer isn’t something I can give you directly. It’s something you’ll find in the music, in the space between words. In a line someone else wrote, but I chose for a reason.
            </p>

            <h2 className="text-lg font-semibold mb-2">What I need you to do:</h2>
            <ol className="list-decimal pl-6 space-y-2 marker:font-bold">
               <li>
                  Put on your headphones. Start playing the playlist I’ve created for you. Let the world fall away. Don’t skip ahead. Just listen.
               </li>
               <li>
                  Somewhere in a song is a line that stops you. That’s your password to your next clue (<span className="italic">The Currency of You</span>). Trust the line that feels like it was written for you. Type it in exactly as it’s sung. No quotes. No punctuation. Just the words, for example: <span className="font-mono">all of me loves all of you</span>.
               </li>
            </ol>
         </div>

         <Clue4Footer />
      </div>
   )
}
export default Clue4
