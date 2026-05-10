"use client";

import { useCallback, useEffect, useRef } from "react";

function rankVoice(v: SpeechSynthesisVoice): number {
  const lang = (v.lang ?? "").toLowerCase();
  const n = `${v.name} ${v.voiceURI}`.toLowerCase();
  if (!lang.startsWith("en")) return -1e6;
  let s = 0;
  if (lang === "en-us" || lang.startsWith("en-us-")) s += 5;
  else if (lang.startsWith("en-gb")) s += 2;
  else if (lang.startsWith("en")) s += 1;
  for (const k of ["premium", "neural", "natural", "enhanced", "wavenet"]) {
    if (n.includes(k)) s += 10;
  }
  for (const k of ["google", "microsoft"]) {
    if (n.includes(k)) s += 3;
  }
  for (const k of ["samantha", "karen", "aaron", "allison", "ava"]) {
    if (n.includes(k)) s += 2;
  }
  return s;
}

function pickEnglishVoice(
  voices: SpeechSynthesisVoice[],
): SpeechSynthesisVoice | null {
  let best: SpeechSynthesisVoice | null = null;
  let bestR = -1e9;
  for (const v of voices) {
    const r = rankVoice(v);
    if (r > bestR) {
      bestR = r;
      best = v;
    }
  }
  return best;
}

export function useBrowserTTS(): {
  supported: boolean;
  speak: (text: string, opts?: { lang?: string; rate?: number; pitch?: number }) => void;
  cancel: () => void;
} {
  const supported =
    typeof window !== "undefined" &&
    typeof window.speechSynthesis !== "undefined";

  const voiceRef = useRef<SpeechSynthesisVoice | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    const syn = window.speechSynthesis;

    const refresh = () => {
      voiceRef.current = pickEnglishVoice(syn.getVoices());
    };

    refresh();
    syn.addEventListener("voiceschanged", refresh);
    const t = window.setTimeout(refresh, 500);

    return () => {
      window.clearTimeout(t);
      syn.removeEventListener("voiceschanged", refresh);
    };
  }, []);

  const cancel = useCallback(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  }, []);

  const speak = useCallback(
    (text: string, opts?: { lang?: string; rate?: number; pitch?: number }) => {
      if (typeof window === "undefined" || !window.speechSynthesis) return;
      const syn = window.speechSynthesis;
      syn.cancel();
      const u = new SpeechSynthesisUtterance(text);
      const v = voiceRef.current;
      if (v) {
        u.voice = v;
        u.lang = opts?.lang ?? v.lang ?? "en-US";
      } else {
        u.lang = opts?.lang ?? "en-US";
      }
      u.rate = opts?.rate ?? 0.9;
      u.pitch = opts?.pitch ?? 1.02;
      syn.speak(u);
    },
    [],
  );

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return { supported, speak, cancel };
}
