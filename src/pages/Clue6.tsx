import { Link } from "react-router";
import Clue6Footer from "../components/Clue6Footer.tsx";

const Clue6 = () => {
   return (
      <div className="flex flex-col h-dvh">
         {/* Image stays fixed height */}
         <div className="shrink-0">
            <Link to={"/clue5"}>
               <img src="./appfiles/stepper/stepper6.svg" alt="wyfm" className="w-full h-auto" />
            </Link>
         </div>

         {/* Scrollable text area */}
         <div className="overflow-y-auto flex-1 mt-4 px-4">
            <h1 className="text-xl font-bold mb-2 text-center">
               Where You’ll Find Me
            </h1>

            <p className="mb-4">
               You made it. Across miles, across moments. Through every doubt you carried quietly. Past every wondering moment you didn’t speak aloud. Now there’s nothing left to solve. No more passwords. No more puzzles. Just this. The whole experience—the clues, the timing, the small surprises—it was never about keeping secrets. It was about giving you something no one else ever has: a story written entirely for you. With love. With intention. With care in every detail.
            </p>

            <p className="mb-4">
               And what I hope you see now is this: <span className="font-bold">You did this.</span> You chose to trust. You moved when you could’ve hesitated. You kept going, even when you didn’t have all the answers. That’s courage. That’s strength. That’s you. So carry that. Let it stay with you. Turns out, you’re kind of a badass. Just thought you should know.
            </p>

            <h2 className="text-lg font-semibold mb-2">What I need you to do:</h2>
            <ol className="list-decimal pl-6 space-y-2 marker:font-bold">
               <li>
                  Exit the airport and take a taxi (or walk) to the <span className="font-bold">InterContinental Tahiti Resort</span>. It’s about a 15-minute walk.
               </li>
               <li>
                  Head to <span className="font-bold">Le Lotus Restaurant</span>. At the front desk, just say your name.
               </li>
               <li>
                  Sit down. Put down your phone. Take a breath. Take a look around.
               </li>
            </ol>

            <p className="mt-4 font-semibold">
               This is where you’ll find me.
            </p>
         </div>

         <Clue6Footer />
      </div>
   )
}
export default Clue6
