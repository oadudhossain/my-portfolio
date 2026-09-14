"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

const themeKey = "oadud-theme";
const themeEvent = "oadud-theme-change";

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", theme === "light" ? "#f6f8fa" : "#090b0c");
}

function subscribe(listener) {
  const onStorage = (event) => {
    if (event.key !== themeKey) return;
    applyTheme(event.newValue === "light" ? "light" : "dark");
    listener();
  };
  window.addEventListener(themeEvent, listener);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(themeEvent, listener);
    window.removeEventListener("storage", onStorage);
  };
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribe,
    () => document.documentElement.dataset.theme || "dark",
    () => "dark",
  );
  const audio = useRef(null);
  useEffect(
    () => () => {
      audio.current?.close().catch(() => {});
    },
    [],
  );

  async function playSwitchSound(nextTheme) {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      if (!audio.current || audio.current.state === "closed")
        audio.current = new AudioContext();
      const context = audio.current;
      if (context.state === "suspended") await context.resume();
      const now = context.currentTime;
      const frequencies = nextTheme === "light" ? [660, 990] : [440, 294];
      frequencies.forEach((frequency, index) => {
        const oscillator = context.createOscillator();
        const gain = context.createGain();
        const start = now + index * 0.045;
        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(frequency, start);
        gain.gain.setValueAtTime(0, start);
        gain.gain.linearRampToValueAtTime(0.035, start + 0.008);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.1);
        oscillator.connect(gain);
        gain.connect(context.destination);
        oscillator.onended = () => {
          oscillator.disconnect();
          gain.disconnect();
        };
        oscillator.start(start);
        oscillator.stop(start + 0.12);
      });
    } catch {
      // Theme switching still works when the browser cannot play audio.
    }
  }

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    applyTheme(next);
    try {
      localStorage.setItem(themeKey, next);
    } catch {}
    window.dispatchEvent(new Event(themeEvent));
    void playSwitchSound(next);
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode · plays a soft click`}
    >
      <svg
        className="theme-sun"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
      </svg>
      <svg
        className="theme-moon"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20.5 13.1A8.7 8.7 0 0 1 10.9 3.5a8.7 8.7 0 1 0 9.6 9.6Z" />
      </svg>
      <span className="theme-light-label">Light</span>
      <span className="theme-dark-label">Dark</span>
    </button>
  );
}
