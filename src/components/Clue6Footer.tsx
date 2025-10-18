import { useRef, useState } from "react";
import Popup from "../ui/Popup.tsx";
import GalleryPopup from "../ui/GalleryPopup.tsx";

const AUDIO_SRC = "/audio/clue-6-where-youll-find-me.mp3";
const AAC_SRC = "/audio/clue-6-where-youll-find-me.m4a";
const SPOTIFY_EMBED =
  "https://open.spotify.com/embed/playlist/755pqZrjUGTORjQTdb7Pcx?utm_source=generator";

const Clue6Footer = () => {
  const [showError, setShowError] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (audio.paused) {
        const p = audio.play();
        if (p && typeof p.then === "function") {
          p.then(() => setIsPlaying(true)).catch((err) => {
            console.warn("Audio play error:", err);
          });
        } else {
          setIsPlaying(true);
        }
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    } catch (err) {
      console.warn("Playback error:", err);
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
          onTouchStart={togglePlay}
          aria-label={isPlaying ? "Pause voice note" : "Play voice note"}
          title={isPlaying ? "Pause voice note" : "Play voice note"}
          className="cursor-pointer focus:outline-none transition-transform hover:scale-110"
        >
          <img
            src="./appfiles/icons/Mic Default.svg"
            alt="mic"
            className={`w-[50px] pointer-events-none ${isPlaying ? "opacity-70" : "opacity-100"}`}
          />
        </button>

        {/* Music icon */}
        <button
          type="button"
          onClick={() => setShowPlayer((v) => !v)}
          aria-expanded={showPlayer}
          aria-controls="spotify-embed"
          aria-label="Play Spotify playlist"
          title="Play Spotify playlist"
          className="cursor-pointer focus:outline-none transition-transform hover:scale-110"
        >
          <img
            src="./appfiles/icons/Music Default.svg"
            alt="music"
            className="w-[50px] pointer-events-none"
          />
        </button>

        {/* Photo icon */}
        <img
          src="./appfiles/icons/Photo Default.svg"
          alt="photo"
          className="cursor-pointer w-[50px] transition-transform hover:scale-110"
          onClick={() => setShowGallery(true)}
        />
      </div>

      {/* Spotify Player */}
      {showPlayer && (
        <div className="flex justify-center mt-4">
          <iframe
            id="spotify-embed"
            data-testid="embed-iframe"
            style={{ borderRadius: 12 }}
            src={SPOTIFY_EMBED}
            width="100%"
            height="152"
            frameBorder={0}
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="max-w-md w-full"
            title="Spotify Playlist"
          />
        </div>
      )}

      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        preload="auto"
        className="hidden"
        onEnded={() => setIsPlaying(false)}
      >
        <source src={AUDIO_SRC} type="audio/mpeg" />
        <source src={AAC_SRC} type="audio/aac" />
        Your browser does not support the audio element.
      </audio>

      {/* Optional (unused) Error Popup */}
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

export default Clue6Footer;
