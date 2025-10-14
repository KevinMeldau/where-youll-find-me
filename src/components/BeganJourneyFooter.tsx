import { useRef, useState } from "react";
import Button from "../ui/Button.tsx";
import { useNavigate } from "react-router";

const AUDIO_SRC = "/audio/hannah-voice-clip.mp3"; // file in /public/audio/

const BeganJourneyFooter = () => {
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();  // user click triggers play on mobile
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    } catch (err) {
      console.warn("Playback error:", err);
    }
  };

  // Allow keyboard (Enter/Space) on the mic button
  const onKey = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      togglePlay();
    }
  };

  return (
    <div className="px-4 py-5">
      <div className="flex gap-3">
        {/* Mic icon — plays/pauses inline (no visible controls) */}
        <button
          type="button"
          onClick={togglePlay}
          onKeyDown={onKey}
          aria-pressed={isPlaying}
          aria-label={isPlaying ? "Pause voice note" : "Play voice note"}
          title={isPlaying ? "Pause voice note" : "Play voice note"}
          className="flex items-center focus:outline-none"
        >
          <img
            src="./appfiles/icons/Mic Default.svg"
            alt="mic"
            className="w-8 h-8"
          />
        </button>

        {/* Text block — like the original */}
        <div>
          <p className="font-bold">Voice note from Hannah</p>
          <p>{isPlaying ? "Playing…" : "Play me!"}</p>
        </div>
      </div>

      {/* Hidden audio element (no native controls) */}
      <audio
        ref={audioRef}
        preload="auto"
        className="hidden"
        onEnded={() => setIsPlaying(false)}
      >
        <source src={AUDIO_SRC} type="audio/mpeg" />
        {/* Optional AAC fallback if you add one later:
        <source src="/audio/hannah-voice-clip.m4a" type="audio/aac" /> */}
        Your browser does not support the audio element.
      </audio>

      <div className="flex justify-between mt-4">
        <Button text="Begin the Journey" onClick={() => navigate("/clue1")} />
      </div>

      {/* Screen reader status (kept visually hidden) */}
      <span className="sr-only" aria-live="polite">
        {isPlaying ? "Voice note playing" : "Voice note paused"}
      </span>
    </div>
  );
};

export default BeganJourneyFooter;
