import { Link } from "react-router";
import Clue5Footer from "../components/Clue5Footer.tsx";

const Clue5 = () => {
  return (
    <div className="flex flex-col h-dvh">
      {/* Image stays fixed height */}
      <div className="shrink-0">
        <Link to="/clue4" aria-label="Go back to Clue 4">
          <img
            src="./appfiles/stepper/stepper5.svg"
            alt="wyfm"
            className="w-full h-auto"
          />
        </Link>
      </div>

      {/* Scrollable text area */}
      <div className="overflow-y-auto flex-1 mt-4 px-4">
        <h1 className="text-xl font-bold mb-2">Clue 5: The Currency of You</h1>

        <p className="mb-4">
          Somewhere between the clouds and the curve of the Earth, you unlocked the last piece. The story shifted again, only now, the magic is closer than ever. This part doesn’t need a plane ticket or a playlist. It just needs a keen eye, and maybe a little curiosity.
        </p>

        <h2 className="text-lg font-semibold mb-2">What I need you to do:</h2>
        <ol className="list-decimal pl-6 space-y-2 marker:font-bold">
          <li>
            When you land, go to any <span className="font-bold">currency conversion counter</span>.
          </li>
          <li>Look for the three-letter currency code for the country you’re in.</li>
          <li>
            That code, those three letters, is the password to your next and final clue, for example: <span className="font-mono">USD</span>.
          </li>
        </ol>

        <hr className="border-t border-[#6A6A6A]/30 my-4" />

        <h2 className="text-lg font-semibold mb-2">Information for Immigration:</h2>
        <p className="mb-4">
          When you reach immigration, they might ask where you’re staying. Here is the address:
          <span className="font-bold"> Hilton Hotel Tahiti, BP 60-98713, Faa’a, Papeete 98713, Tahiti</span>.
          <br />
          <br />
          Click{" "}
          <a
            href="/manage-reservation.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline hover:text-primary"
          >
            this link
          </a>{" "}
          and show them our hotel booking.
        </p>

        <p className="mb-2">
          They might also ask how long we’ll be in French Polynesia. We’re staying for two weeks. Here’s our itinerary:
        </p>

        <br />

        <ul className="list-decimal pl-6 space-y-2 marker:font-bold">
          <li>
            <span className="font-bold">Tahiti:</span> Nov 15th–17th
          </li>
          <li>
            <span className="font-bold">Moorea:</span> Nov 17th–22nd
          </li>
          <li>
            <span className="font-bold">Bora Bora:</span> Nov 22nd–30th
          </li>
          <li>
            <span className="font-bold">Back to Papeete:</span> Nov 30th
          </li>
          <li>
            <span className="font-bold">Fly home:</span> Dec 1st
          </li>
        </ul>

        <br />

        <p className="mb-4">
          Here is {" "}
          <a
            href="/Activities_Budget_Summary.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline hover:text-primary"
          >
            a list
          </a>{" "}
          of the activities we plan to do.
        </p>

        <p>
          We’re island hopping and staying flexible with where we stay.
        </p>
        <p>
          Come out of customs, draw about 8000 XFP (about $70). Catch a taxi to the hotel.
        </p>
      </div>

      <Clue5Footer />
    </div>
  );
};

export default Clue5;
