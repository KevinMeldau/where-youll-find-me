import { useRef, useState } from "react";
import Button from "../ui/Button.tsx";
import { useNavigate } from "react-router";

const BeganJourneyFooter = () => {
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (audio.paused) {
        const playPromise = audio.play();
        if (playPromise && typeof playPromise.then === "function") {
          playPromise
            .then(() => setIsPlaying(true))
            .catch((err) => {
              console.warn("Playback error:", err);
            });
        } else {
          setIsPlaying(true);
        }
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    } catch (err) {
      console.warn("Audio toggle error:", err);
    }
  };

  const onKey = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      togglePlay();
    }
  };

  return (
    <div className="px-4 py-5">
      <div className="flex gap-3 items-center">
        <button
          type="button"
          onClick={togglePlay}
          onTouchStart={togglePlay}
          onKeyDown={onKey}
          aria-pressed={isPlaying}
          aria-label={isPlaying ? "Pause voice note" : "Play voice note"}
          title={isPlaying ? "Pause voice note" : "Play voice note"}
          className="flex items-center focus:outline-none transition-transform hover:scale-110 cursor-pointer"
        >
          <img
            src="./appfiles/icons/Mic Default.svg"
            alt="mic"
            className={`w-[50px] pointer-events-none ${
              isPlaying ? "opacity-70" : "opacity-100"
            }`}
          />
        </button>

        <div>
          <p className="font-bold">Voice note from Hannah</p>
          <p>{isPlaying ? "Playing…" : "Play me!"}</p>
        </div>
      </div>

      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        preload="auto"
        className="hidden"
        onEnded={() => setIsPlaying(false)}
      >
        <source src="/audio/hannah-voice-clip.mp3" type="audio/mpeg" />
        <source src="/audio/hannah-voice-clip.m4a" type="audio/aac" />
        Your browser does not support the audio element.
      </audio>

      <div className="flex justify-center mt-4">
        <Button
          text="Begin this adventure"
          className="w-full"
          onClick={() => navigate("/clue1")}
        />
      </div>

      <span className="sr-only" aria-live="polite">
        {isPlaying ? "Voice note playing" : "Voice note paused"}
      </span>
    </div>
  );
};

export default BeganJourneyFooter;
