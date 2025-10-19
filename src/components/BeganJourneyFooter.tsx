import Button from "../ui/Button.tsx";
import { useNavigate } from "react-router";

const BeganJourneyFooter = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 py-5">
      <div className="flex gap-3 items-center">
        {/* Mic icon opens audio in a new tab */}
        <a
          href="/audio/hannah-voice-clip.mp3"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Play voice note from Hannah (opens in a new tab)"
          title="Play voice note from Hannah"
          className="flex items-center focus:outline-none transition-transform hover:scale-110 cursor-pointer"
        >
          <img
            src="./appfiles/icons/Mic Default.svg"
            alt="mic"
            className="w-[50px] pointer-events-none"
          />
        </a>

        <div>
          <p className="font-bold">Voice note from Hannah</p>
          <p>(All voice messages open in a new tab)</p>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <Button
          text="Start this adventure"
          className="w-full"
          onClick={() => navigate("/clue1")}
        />
      </div>
    </div>
  );
};

export default BeganJourneyFooter;
