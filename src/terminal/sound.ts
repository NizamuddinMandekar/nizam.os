// Tiny WebAudio synth for terminal sounds no audio assets needed.

let ctx: AudioContext | null = null;
let muted = localStorage.getItem("nizamos-sound") === "off";

function audio(): AudioContext | null {
  if (muted) return null;
  if (!ctx) {
    try {
      ctx = new AudioContext();
    } catch {
      return null;
    }
  }
  if (ctx.state === "suspended") ctx.resume();
  return ctx;
}

function blip(freq: number, duration: number, gain: number, type: OscillatorType = "square") {
  const ac = audio();
  if (!ac) return;
  const osc = ac.createOscillator();
  const g = ac.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  g.gain.setValueAtTime(gain, ac.currentTime);
  g.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + duration);
  osc.connect(g).connect(ac.destination);
  osc.start();
  osc.stop(ac.currentTime + duration);
}

let greetClip: HTMLAudioElement | null = null;

function speakGreeting() {
  if (!("speechSynthesis" in window)) return;
  const utter = new SpeechSynthesisUtterance("Hi. Welcome to Nizam's era.");
  utter.rate = 0.88;
  utter.pitch = 0.85;
  utter.volume = 1;
  const voices = speechSynthesis.getVoices().filter((v) => v.lang.startsWith("en"));
  const preferred =
    voices.find((v) => /aria|jenny|sonia|libby/i.test(v.name)) ??
    voices.find((v) => /zira|hazel|susan|catherine/i.test(v.name)) ??
    voices.find((v) => /female|samantha|karen|tessa|moira|fiona|veena/i.test(v.name)) ??
    voices[0];
  if (preferred) utter.voice = preferred;
  speechSynthesis.cancel();
  speechSynthesis.speak(utter);
}

export const sound = {
  key() {
    // soft mechanical click, slight pitch variance so it doesn't sound robotic
    blip(1800 + Math.random() * 600, 0.015, 0.025);
  },
  enter() {
    blip(340, 0.06, 0.05, "triangle");
  },
  boot() {
    blip(880, 0.09, 0.05, "sine");
    setTimeout(() => blip(1320, 0.12, 0.05, "sine"), 100);
  },
  error() {
    blip(160, 0.12, 0.06, "sawtooth");
  },
  preloadWelcome() {
    // start downloading the greeting clip before the user taps to enter
    if (muted || greetClip) return;
    greetClip = new Audio(import.meta.env.BASE_URL + "greet.mp3");
    greetClip.preload = "auto";
    greetClip.load();
  },
  welcome() {
    // spoken greeting on entering the OS recorded clip, speech synth as fallback
    // MUST be called synchronously from a user gesture (tap/keypress) — mobile
    // browsers block both audio playback and speech synthesis outside one
    if (muted) return;
    if ("speechSynthesis" in window) {
      // unlock speech synthesis inside the gesture so the async fallback
      // below isn't blocked on iOS/Android
      speechSynthesis.cancel();
      speechSynthesis.speak(new SpeechSynthesisUtterance(" "));
    }
    const clip = greetClip ?? new Audio(import.meta.env.BASE_URL + "greet.mp3");
    clip.volume = 1;
    clip.currentTime = 0;
    clip.play().catch(() => speakGreeting());
  },
  isMuted() {
    return muted;
  },
  setMuted(value: boolean) {
    muted = value;
    localStorage.setItem("nizamos-sound", value ? "off" : "on");
  },
};
