import { useRef, useState } from "react";
import Button from "../ui/Button.tsx";
import { useNavigate } from "react-router";

const AUDIO_SRC = "/audio/hannah-voice-clip.mp3"; // file in /public/audio/
// Add an AAC next to it: /public/audio/hannah-voice-clip.m4a

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
        // iOS nudge; call play() synchronously on the touch/click event
        if (audio.currentTime === 0) {
          try {
            audio.currentTime = 0.001;
          } catch {}
        }
        const p = audio.play();
        if (p && typeof p.then === "function") {
          p.then(() => setIsPlaying(true)).catch(() => {
            // Common iOS cause: device in Silent/Ring = Silent, volume 0, or BT route
            setPlayError(
              "No sound? On iPhone: switch OFF Silent mode, raise the volume, and make sure you’re not routed to Bluetooth. Then tap the mic again."
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
        "Couldn’t start audio. On iPhone, turn off Silent mode and raise the volume, then tap again."
      );
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
        {/* Mic icon — add onTouchStart for iOS */}
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

      {/* Helpful message if iOS blocks playback */}
      {playError && (
        <p className="mt-2 text-xs text-red-400 text-center">{playError}</p>
      )}

      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        preload="auto"
        className="hidden"
        onEnded={() => setIsPlaying(false)}
      >
        <source src={AUDIO_SRC} type="audio/mpeg" />
        {/* AAC fallback; ensure the file exists */}
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
