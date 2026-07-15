"use client";

import { useCallback, useEffect, useRef, type CSSProperties } from "react";

type PetalStyle = CSSProperties & Record<`--${string}`, string>;

const petals = Array.from({ length: 42 }, (_, index) => ({
  id: index,
  style: {
    "--petal-x": `${(index * 37) % 101}vw`,
    "--petal-drift": `${((index * 29) % 180) - 90}px`,
    "--petal-delay": `${((index * 13) % 24) / 10}s`,
    "--petal-duration": `${4.8 + ((index * 7) % 20) / 10}s`,
    "--petal-size": `${9 + ((index * 11) % 12)}px`,
    "--petal-hue": `${index % 3}`,
  } as PetalStyle,
}));

export function RoyalWelcome() {
  const playedRef = useRef(false);
  const audioRef = useRef<HTMLAudioElement[]>([]);
  const timersRef = useRef<number[]>([]);

  const playWelcome = useCallback(async () => {
    if (playedRef.current) return;

    const nagada = new Audio("/audio/indian-nagada.mp3");
    const elephant = new Audio("/audio/elephant-war-trumpet.ogg");
    nagada.preload = "auto";
    elephant.preload = "auto";
    nagada.volume = 1;
    elephant.volume = 1;

    await nagada.play();
    playedRef.current = true;
    audioRef.current = [nagada, elephant];

    timersRef.current.push(
      window.setTimeout(() => {
        elephant.play().catch(() => undefined);
      }, 1450),
      window.setTimeout(() => {
        nagada.pause();
        nagada.currentTime = 0;
      }, 8500),
    );
  }, []);

  useEffect(() => {
    const attemptTimer = window.setTimeout(() => {
      playWelcome().catch(() => undefined);
    }, 420);
    const unlock = () => playWelcome().catch(() => undefined);
    window.addEventListener("pointerdown", unlock, { once: true });
    window.addEventListener("keydown", unlock, { once: true });

    return () => {
      window.clearTimeout(attemptTimer);
      timersRef.current.forEach(window.clearTimeout);
      audioRef.current.forEach((audio) => audio.pause());
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
    };
  }, [playWelcome]);

  return (
    <div className="flower-shower" aria-hidden="true">
      {petals.map((petal) => <i key={petal.id} style={petal.style} />)}
    </div>
  );
}
