import { useState } from "react";
import Button from "../ui/Button.tsx";
import { useNavigate } from "react-router";
import Popup from "../ui/Popup.tsx";
import GalleryPopup from "../ui/GalleryPopup.tsx";

const AUDIO_LINK = "/audio/clue-1-runaway-rendezvous.mp3";
const SPOTIFY_LINK =
  "https://open.spotify.com/playlist/755pqZrjUGTORjQTdb7Pcx?utm_source=generator";

const Clue1Footer = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [showGallery, setShowGallery] = useState(false);

  const handleNext = () => {
    if (password === import.meta.env.VITE_CLUE1_PASSWORD) {
      navigate("/clue2");
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="px-4 py-5">
      {/* Icons row */}
      <div className="flex gap-3 justify-between max-w-[70%] mx-auto">
        {/* Mic icon opens audio in a new tab */}
        <a
          href={AUDIO_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Play voice note (opens in a new tab)"
          title="Play voice note"
          className="cursor-pointer focus:outline-none transition-transform hover:scale-110"
        >
          <img
            src="./appfiles/icons/Mic Default.svg"
            alt="mic"
            className="w-[50px] pointer-events-none"
          />
        </a>

        {/* Music icon now opens Spotify app */}
        <a
          href={SPOTIFY_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Spotify playlist"
          title="Open Spotify playlist"
          className="cursor-pointer focus:outline-none transition-transform hover:scale-110"
        >
          <img
            src="./appfiles/icons/Music Default.svg"
            alt="music"
            className="w-[50px] pointer-events-none"
          />
        </a>

        {/* Photo icon */}
        <img
          src="./appfiles/icons/Photo Default.svg"
          alt="photo"
          className="cursor-pointer w-[50px] transition-transform hover:scale-110"
          onClick={() => setShowGallery(true)}
        />
      </div>

      {/* Password field */}
      <div className="mt-4">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleNext();
          }}
          className="border-gray-400 border rounded-md w-full px-3 py-2 outline-0 text-sm"
          placeholder="Password"
        />
        <div className="flex justify-center mt-4">
          <Button text="Next clue" className="w-full" onClick={handleNext} />
        </div>
      </div>

      {/* Error Popup */}
      <Popup
        isOpen={showError}
        onClose={() => setShowError(false)}
        message="That’s not quite right — try again ❤️"
      />

      {/* Gallery Popup */}
      <GalleryPopup isOpen={showGallery} onClose={() => setShowGallery(false)}>
        Look at the life we've built. The memories we've made. The places we’ve seen,
        some we dreamed about, others we stumbled into. This is what love looks like
        when it's lived. When it's chosen, day after day. This is us, laughing,
        exploring, figuring it out, holding on.{" "}
        <span className="font-bold text-primary">We made this.</span>
      </GalleryPopup>
    </div>
  );
};

export default Clue1Footer;
