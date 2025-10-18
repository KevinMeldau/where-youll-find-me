import { useRef, useState } from "react";
import Button from "../ui/Button.tsx";
import { useNavigate } from "react-router";

const AUDIO_SRC = "/audio/hannah-voice-clip.mp3"; // file in /public/audio/

const BeganJourneyFooter = () => {
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [playError, setPlayError] = useState<string | null>(null);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    setPlayError(null);

    try {
      if (audio.paused) {
        // iOS: ensure play() is triggered directly on click
        if (audio.currentTime === 0) {
          try {
            audio.currentTime = 0.001;
          } catch {}
        }

        const p = audio.play();
        if (p && typeof p.then === "function") {
          p
            .then(() => setIsPlaying(true))
            .catch(() => {
              setPlayError(
                "If you’re on iPhone, switch off Silent mode and turn volume up, then tap again."
              );
            });
        } else {
          setIsPlaying(true);
        }
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    } catch {
      setPlayError(
        "Couldn’t start audio. On iPhone, flip the Silent switch off and raise volume, then tap again."
      );
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
      <div className="flex gap-3 items-center">
        {/* Mic icon — same size as clue icons, with hover animation */}
        <button
          type="button"
          onClick={togglePlay}
          onKeyDown={onKey}
          aria-pressed={isPlaying}
          aria-label={isPlaying ? "Pause voice note" : "Play voice note"}
          title={isPlaying ? "Pause voice note" : "Play voice note"}
          className="flex items-center focus:outline-none transition-transform hover:scale-110 cursor-pointer"
        >
          <img
            src="./appfiles/icons/Mic Default.svg"
            alt="mic"
            className="w-[50px] pointer-events-none"
          />
        </button>

        {/* Text block — like the original */}
        <div>
          <p className="font-bold">Voice note from Hannah</p>
          <p>{isPlaying ? "Playing…" : "Play me!"}</p>
        </div>
      </div>

      {/* Optional mobile playback error hint */}
      {playError && (
        <p className="mt-2 text-xs text-red-400 text-center">{playError}</p>
      )}

      {/* Hidden audio element (no native controls) */}
      <audio
        ref={audioRef}
        preload="auto"
        className="hidden"
        onEnded={() => setIsPlaying(false)}
      >
        <source src={AUDIO_SRC} type="audio/mpeg" />
        {/* Optional AAC fallback for better iOS compatibility */}
        {/* <source src={AUDIO_SRC.replace(".mp3", ".m4a")} type="audio/aac" /> */}
        Your browser does not support the audio element.
      </audio>

      <div className="flex justify-center mt-4">
        <Button
          text="Begin this adventure"
          className="w-full"
          onClick={() => navigate("/clue1")}
        />
      </div>

      {/* Screen reader status (kept visually hidden) */}
      <span className="sr-only" aria-live="polite">
        {isPlaying ? "Voice note playing" : "Voice note paused"}
      </span>
    </div>
  );
};

export default BeganJourneyFooter;
