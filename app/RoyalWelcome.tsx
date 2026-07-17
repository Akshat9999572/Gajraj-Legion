"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";

type PetalStyle = CSSProperties & Record<`--${string}`, string>;
const WELCOME_DURATION = 9000;

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
  const startingRef = useRef(false);
  const audioRef = useRef<HTMLAudioElement[]>([]);
  const timersRef = useRef<number[]>([]);
  const [needsTap, setNeedsTap] = useState(false);
  const [showerActive, setShowerActive] = useState(false);

  const playWelcome = useCallback(async () => {
    if (playedRef.current || startingRef.current) return;
    startingRef.current = true;

    const nagada = new Audio("/audio/indian-nagada.mp3");
    const elephant = new Audio("/audio/elephant-war-trumpet.ogg");
    nagada.preload = "auto";
    elephant.preload = "auto";
    nagada.volume = 1;
    elephant.volume = 1;

    try {
      // Starting both elements inside the tap unlocks delayed elephant audio on iOS.
      elephant.muted = true;
      await Promise.all([nagada.play(), elephant.play()]);
      elephant.pause();
      elephant.currentTime = 0;
      elephant.muted = false;
      playedRef.current = true;
      audioRef.current = [nagada, elephant];
      setNeedsTap(false);
      setShowerActive(true);
    } catch (error) {
      nagada.pause();
      elephant.pause();
      setNeedsTap(true);
      throw error;
    } finally {
      startingRef.current = false;
    }

    timersRef.current.push(
      window.setTimeout(() => {
        elephant.play().catch(() => undefined);
      }, 1450),
      window.setTimeout(() => {
        nagada.pause();
        nagada.currentTime = 0;
        setShowerActive(false);
      }, WELCOME_DURATION),
    );
  }, []);

  useEffect(() => {
    const attemptTimer = window.setTimeout(() => {
      playWelcome().catch(() => undefined);
    }, 420);
    return () => {
      window.clearTimeout(attemptTimer);
      timersRef.current.forEach(window.clearTimeout);
      audioRef.current.forEach((audio) => audio.pause());
    };
  }, [playWelcome]);

  return (
    <>
      {showerActive && (
        <div className="flower-shower" aria-hidden="true">
          {petals.map((petal) => <i key={petal.id} style={petal.style} />)}
        </div>
      )}
      {needsTap && (
        <button className="mobile-sound-gate" type="button" onClick={() => playWelcome().catch(() => undefined)}>
          <span aria-hidden="true">♛</span>
          <strong>Tap for royal welcome</strong>
          <small>Indian nagada &amp; elephant roar</small>
        </button>
      )}
    </>
  );
}
