/**
 * Web Audio API Sound Synthesizer
 * Generates authentic 8-bit retro arcade tones with zero external audio assets!
 */

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

export function playSquish(enabled = true) {
  if (!enabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = "sawtooth";
  osc.frequency.setValueAtTime(450, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.12);

  gain.gain.setValueAtTime(0.25, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.12);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start();
  osc.stop(ctx.currentTime + 0.13);
}

export function playCombo(enabled = true) {
  if (!enabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "triangle";
    osc.frequency.setValueAtTime(freq, now + idx * 0.05);

    gain.gain.setValueAtTime(0.18, now + idx * 0.05);
    gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.05 + 0.1);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now + idx * 0.05);
    osc.stop(now + idx * 0.05 + 0.11);
  });
}

export function playConnect(enabled = true) {
  if (!enabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = "sine";
  osc.frequency.setValueAtTime(330, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.18);

  gain.gain.setValueAtTime(0.2, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start();
  osc.stop(ctx.currentTime + 0.22);
}

export function playComplete(enabled = true) {
  if (!enabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const notes = [440, 554.37, 659.25, 880];
  const now = ctx.currentTime;

  notes.forEach((freq, i) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "square";
    osc.frequency.setValueAtTime(freq, now + i * 0.08);

    gain.gain.setValueAtTime(0.15, now + i * 0.08);
    gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.08 + 0.25);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now + i * 0.08);
    osc.stop(now + i * 0.08 + 0.26);
  });
}

// ── Ultra-Satisfying ASMR Bubble Pop ──
export function playBubblePop(pitch = 1, enabled = true) {
  if (!enabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  const baseFreq = 420 * pitch + Math.random() * 60;
  osc.type = "sine";
  osc.frequency.setValueAtTime(baseFreq, now);
  osc.frequency.exponentialRampToValueAtTime(baseFreq * 2.2, now + 0.06);

  gain.gain.setValueAtTime(0.35, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 0.08);
}

// ── Juicy Fruit Merge Sound ──
export function playFruitMerge(level = 1, enabled = true) {
  if (!enabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const baseFreq = 300 + level * 75;

  [baseFreq, baseFreq * 1.25, baseFreq * 1.5].forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "triangle";
    osc.frequency.setValueAtTime(freq, now + idx * 0.04);

    gain.gain.setValueAtTime(0.25, now + idx * 0.04);
    gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.04 + 0.12);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now + idx * 0.04);
    osc.stop(now + idx * 0.04 + 0.13);
  });
}

// ── Flap / Jump Sound ──
export function playFlap(enabled = true) {
  if (!enabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = "sine";
  osc.frequency.setValueAtTime(260, now);
  osc.frequency.exponentialRampToValueAtTime(540, now + 0.09);

  gain.gain.setValueAtTime(0.22, now);
  gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 0.11);
}

// ── Wheel Click Peg Sound ──
export function playWheelTick(enabled = true) {
  if (!enabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = "triangle";
  osc.frequency.setValueAtTime(700 + Math.random() * 80, now);
  osc.frequency.exponentialRampToValueAtTime(200, now + 0.03);

  gain.gain.setValueAtTime(0.25, now);
  gain.gain.exponentialRampToValueAtTime(0.01, now + 0.035);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 0.04);
}

// ── Wheel Jackpot Fanfare ──
export function playJackpot(enabled = true) {
  if (!enabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const chord = [523.25, 659.25, 783.99, 1046.5, 1318.51];

  chord.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, now + idx * 0.06);

    gain.gain.setValueAtTime(0.2, now + idx * 0.06);
    gain.gain.exponentialRampToValueAtTime(0.005, now + idx * 0.06 + 0.35);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now + idx * 0.06);
    osc.stop(now + idx * 0.06 + 0.38);
  });
}

export function playSynthPad(padId: number, enabled = true) {
  if (!enabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  switch (padId) {
    case 1: // 808 Bass Kick
      osc.type = "sine";
      osc.frequency.setValueAtTime(150, now);
      osc.frequency.exponentialRampToValueAtTime(40, now + 0.25);
      gain.gain.setValueAtTime(0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
      break;
    case 2: // Cyber Snare
      osc.type = "triangle";
      osc.frequency.setValueAtTime(260, now);
      osc.frequency.exponentialRampToValueAtTime(90, now + 0.15);
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
      break;
    case 3: // Glitch Hi-Hat
      osc.type = "square";
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(1200, now + 0.06);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.06);
      break;
    case 4: // Synth Chord
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(440, now);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
      break;
    case 5: // Laser Pew
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(990, now);
      osc.frequency.exponentialRampToValueAtTime(120, now + 0.15);
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
      break;
    case 6: // Retro Coin
      osc.type = "sine";
      osc.frequency.setValueAtTime(987.77, now);
      osc.frequency.setValueAtTime(1318.51, now + 0.08);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
      break;
    case 7: // Power Up
      osc.type = "triangle";
      osc.frequency.setValueAtTime(330, now);
      osc.frequency.linearRampToValueAtTime(660, now + 0.2);
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.22);
      break;
    case 8: // 1-Up Jingle
      osc.type = "square";
      osc.frequency.setValueAtTime(659.25, now);
      osc.frequency.setValueAtTime(1046.5, now + 0.1);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
      break;
    default:
      osc.type = "sine";
      osc.frequency.setValueAtTime(440, now);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
  }

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 0.36);
}

export function playBounce(enabled = true) {
  if (!enabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = "sine";
  osc.frequency.setValueAtTime(220, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.08);

  gain.gain.setValueAtTime(0.2, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start();
  osc.stop(ctx.currentTime + 0.09);
}