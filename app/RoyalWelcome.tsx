"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";

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

function drumBeat(context: AudioContext, time: number, strength = 1) {
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(125, time);
  oscillator.frequency.exponentialRampToValueAtTime(42, time + 0.28);
  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(0.48 * strength, time + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.34);
  oscillator.connect(gain).connect(context.destination);
  oscillator.start(time);
  oscillator.stop(time + 0.36);
}

function elephantTrumpet(context: AudioContext, time: number) {
  const gain = context.createGain();
  const filter = context.createBiquadFilter();
  const oscillator = context.createOscillator();
  oscillator.type = "sawtooth";
  oscillator.frequency.setValueAtTime(185, time);
  oscillator.frequency.exponentialRampToValueAtTime(430, time + 0.38);
  oscillator.frequency.exponentialRampToValueAtTime(245, time + 1.25);
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(1450, time);
  filter.Q.value = 5;
  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(0.12, time + 0.09);
  gain.gain.setValueAtTime(0.12, time + 0.82);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + 1.35);
  oscillator.connect(filter).connect(gain).connect(context.destination);
  oscillator.start(time);
  oscillator.stop(time + 1.4);
}

export function RoyalWelcome() {
  const contextRef = useRef<AudioContext | null>(null);
  const playedRef = useRef(false);
  const [soundReady, setSoundReady] = useState(false);

  const playWelcome = useCallback(async () => {
    if (playedRef.current) return;
    const AudioContextClass = window.AudioContext;
    const context = contextRef.current ?? new AudioContextClass();
    contextRef.current = context;
    await context.resume();
    if (context.state !== "running") {
      setSoundReady(true);
      return;
    }

    playedRef.current = true;
    setSoundReady(false);
    const start = context.currentTime + 0.08;
    [0, 0.22, 0.44, 0.78, 1.02].forEach((offset, index) =>
      drumBeat(context, start + offset, index === 3 ? 1 : 0.78),
    );
    elephantTrumpet(context, start + 1.12);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      playWelcome().catch(() => setSoundReady(true));
    }, 420);
    const unlock = () => playWelcome().catch(() => setSoundReady(true));
    window.addEventListener("pointerdown", unlock, { once: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("pointerdown", unlock);
    };
  }, [playWelcome]);

  return (
    <>
      <div className="flower-shower" aria-hidden="true">
        {petals.map((petal) => <i key={petal.id} style={petal.style} />)}
      </div>
      <button
        className={`welcome-sound ${soundReady ? "needs-tap" : ""}`}
        type="button"
        onClick={() => {
          playedRef.current = false;
          playWelcome().catch(() => setSoundReady(true));
        }}
        aria-label="Play royal welcome sound"
      >
        <span aria-hidden="true">♪</span> {soundReady ? "TAP FOR SOUND" : "REPLAY SOUND"}
      </button>
    </>
  );
}
