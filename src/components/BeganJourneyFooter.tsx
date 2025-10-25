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
          <p className="text-sm">(All voice messages open in a new tab)</p>
        </div>
      </div>

      {/* --- Key Section --- */}
      <section id="key" className="mt-5 pt-4 border-t border-[#6A6A6A]/30">
        <h2 className="text-lg font-semibold mb-4">
          What the icons on the next page mean:
        </h2>

        <div className="space-y-4">
          {/* Voice Clip */}
          <div className="flex items-center gap-3">
            <img
              src="/appfiles/icons/Mic Default.svg"
              alt="Mic icon"
              title="Voice clip"
              className="w-[38px] shrink-0 transition-transform hover:scale-110"
            />
            <p className="leading-snug">
              <strong>Voice clip</strong>: Opens a voice clip from me, guiding you.
            </p>
          </div>

          {/* Playlist */}
          <div className="flex items-center gap-3">
            <img
              src="/appfiles/icons/Music Default.svg"
              alt="Playlist icon"
              title="Playlist"
              className="w-[38px] shrink-0 transition-transform hover:scale-110"
            />
            <p className="leading-snug">
              <strong>Playlist</strong>: Opens a Spotify playlist, my “mixed tape” to you.
            </p>
          </div>

          {/* Images */}
          <div className="flex items-center gap-3">
            <img
              src="/appfiles/icons/Photo Default.svg"
              alt="Images icon"
              title="Images"
              className="w-[38px] shrink-0 transition-transform hover:scale-110"
            />
            <p className="leading-snug">
              <strong>Images</strong>: Opens a photo gallery of the life we've created.
            </p>
          </div>
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
