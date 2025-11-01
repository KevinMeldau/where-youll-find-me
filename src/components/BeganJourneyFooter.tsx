import Button from "../ui/Button.tsx";
import { useNavigate } from "react-router";

const BeganJourneyFooter = () => {
  const navigate = useNavigate();

  return (
    <div className="px-2 py-5">
      {/* Voice note row */}
      <div className="flex gap-3 items-center mb-0">
        <a
          href="/audio/hannah-voice-clip.mp3"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Play voice note from Hannah (opens in a new tab)"
          title="Play voice note from Hannah"
          className="flex items-center focus:outline-none transition-transform hover:scale-110 cursor-pointer"
        >
          <img
            src="/appfiles/icons/Mic Default.svg"
            alt="mic"
            className="w-[45px] pointer-events-none"
          />
        </a>

        <div>
          <p className="font-bold">Voice note from Hannah</p>
          <p>(All voice messages open in a new tab)</p>
        </div>
      </div>

      {/* --- Key Section --- */}
      <section id="key" className="mt-5 pt-4">
        <h2 className="text-lg font-semibold mb-3">
          What the icons on the next page mean:
        </h2>

        <div className="space-y-3 text-sm">
          <p>
            <strong>Voice clip</strong>: Opens a new voice message from me, guiding you in each clue.
          </p>
          <p>
            <strong>Playlist</strong>: Opens a Spotify playlist, my <span className="font-semibold">'mixed tape'</span> to you.
          </p>
          <p>
            <strong>Images</strong>: Opens a small photo gallery from our story so far.
          </p>
        </div>
      </section>

      {/* Begin button */}
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
