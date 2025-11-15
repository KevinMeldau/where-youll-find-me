import { Link } from "react-router";
import Clue2Footer from "../components/Clue2Footer.tsx";

const Clue2 = () => {
  return (
    <div className="flex flex-col h-dvh">
      {/* Stepper image */}
      <div className="shrink-0">
        <Link to="/clue1" aria-label="Go back to Clue 1">
          <img
            src="./appfiles/stepper/stepper2.svg"
            alt="Clue progress"
            className="w-full h-auto"
          />
        </Link>
      </div>

      {/* Scrollable text area */}
      <div className="overflow-y-auto flex-1 mt-4 px-4">
        <h1 className="text-xl font-bold mb-2">Clue 2: Shadow Landing</h1>

        <p className="mb-4">
          You’ve landed. You’re not just moving through terminals, you’re moving
          through a story. One that started long before today.
        </p>

        <h2 className="text-lg font-semibold mb-2">What I need you to do:</h2>
        <ol className="list-decimal pl-6 space-y-2 marker:font-bold">
          <li>
            Make your way to the{" "}
            <a
              href="https://www.hilton.com/en/hotels/laxahhh-hilton-los-angeles-airport/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline hover:text-primary"
            >
              Hilton Los Angeles Airport
            </a>
            . <br />
            The address is:{" "}
            <span className="font-bold">
              5711 West Century Boulevard, Los Angeles.</span>
            <br />
            <span className="italic">There is a free shuttle outside Terminal 1</span>. 
            <br /><br />
            Your room is waiting, just go to reception and collect your key card.
            You’re in room <span className="font-bold">4014</span>.
          </li>

          <li>
            Eat something. Take a shower. Put your feet up.
            <br />
            Sleep, you’re going to need it.
          </li>

          <li>
            <span className="font-bold">
              At 7:00 PM (not before, I’ll know)
            </span>
            , open the safe in your room. The code for the safe is the{" "}
            <span className="font-bold">year you were born</span>.
            <br />
            Inside the safe is what you’ll need to continue this adventure.
          </li>

          <li>
            You’ll also find the password to your next clue (
            <span className="italic">Clearance to Dream</span>).
          </li>
        </ol>
      </div>

      <Clue2Footer />
    </div>
  );
};

export default Clue2;
