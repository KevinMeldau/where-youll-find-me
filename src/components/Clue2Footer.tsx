import { useRef, useState } from "react";
import Button from "../ui/Button.tsx";
import { useNavigate } from "react-router";
import Popup from "../ui/Popup.tsx";
import GalleryPopup from "../ui/GalleryPopup.tsx";

const AUDIO_SRC = "/audio/clue-2-shadow-landing.mp3"; // file in /public/audio/

const Clue2Footer = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [showGallery, setShowGallery] = useState(false);

  // audio controls
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      if (audio.paused) {
        await audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    } catch (err) {
      console.warn("Playback error:", err);
    }
  };

  const handleNext = () => {
    if (password === import.meta.env.VITE_CLUE2_PASSWORD) {
      navigate("/clue3");
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="px-4 py-5">
      {/* Icons row */}
      <div className="flex gap-3 justify-between max-w-[70%] mx-auto">
        {/* Mic icon */}
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause voice note" : "Play voice note"}
          title={isPlaying ? "Pause voice note" : "Play voice note"}
          className="focus:outline-none transition-transform hover:scale-110"
        >
          <img
            src="./appfiles/icons/Mic Default.svg"
            alt="mic"
            className={`w-[50px] ${isPlaying ? "opacity-70" : "opacity-100"}`}
          />
        </button>

        {/* Music icon with hover scale */}
        <img
          src="./appfiles/icons/Music Default.svg"
          alt="music"
          className="w-[50px] transition-transform hover:scale-110"
        />

        {/* Photo icon with hover scale */}
        <img
          src="./appfiles/icons/Photo Default.svg"
          alt="photo"
          className="cursor-pointer w-[50px] transition-transform hover:scale-110"
          onClick={() => setShowGallery(true)}
        />
      </div>


      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        preload="auto"
        className="hidden"
        onEnded={() => setIsPlaying(false)}
      >
        <source src={AUDIO_SRC} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Password field + button */}
      <div className="mt-4">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-gray-400 border rounded-md w-full px-3 py-2 outline-0 text-sm"
          placeholder="Password"
        />

        <div className="flex justify-center mt-4">
          <Button text="Next Clue" className="w-[200px]" onClick={handleNext} />
        </div>
      </div>

      {/* Error Popup */}
      <Popup
        isOpen={showError}
        onClose={() => setShowError(false)}
        message="Wrong password, try again."
      />

      {/* Gallery Popup */}
      <GalleryPopup isOpen={showGallery} onClose={() => setShowGallery(false)}>
        Look at the life we've built. The memories we've made. The places we’ve
        seen, some we dreamed about, others we stumbled into. This is what love
        looks like when it's lived. When it's chosen, day after day. This is us,
        laughing, exploring, figuring it out, holding on.{" "}
        <span className="font-bold text-primary">We made this.</span>
      </GalleryPopup>
    </div>
  );
};

export default Clue2Footer;
