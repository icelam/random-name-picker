import { PIANO_KEYS, PianoKey } from '@js/constants';

interface SoundConfig {
  /** Oscillator type, can be "sawtooth" | "sine" | "square" | "triangle" */
  type?: OscillatorType;
  /** Ease out to 1% during last 100ms */
  easeOut?: boolean;
  /** Volume of the sound, should be between 0.1 to 1, where 0.1 set volume to 10% */
  volume?: number;
}

interface SoundSeries {
  /** Name of piano key */
  key: PianoKey;
  /** Duration of the key in seconds */
  duration: number;
}

/** Class for playing sound effects via AudioContext */
export default class SoundEffects {
  /** Audio context instancce */
  private audioContext?: AudioContext;

  /** Indicator for whether this sound effect instance is muted */
  private isMuted: boolean;

  constructor(isMuted = false) {
    if (window.AudioContext || window.webkitAudioContext) {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }

    this.isMuted = isMuted;
  }

  /** Setter for isMuted */
  set mute(mute: boolean) {
    this.isMuted = mute;
  }

  /** Getter for isMuted */
  get mute(): boolean {
    return this.isMuted;
  }

  /**
   * Play a sound by providing a list of keys and duration
   * @param sound  Series of piano keys and it's durarion to play
   * @param config.type  Oscillator type
   * @param config.easeOut  Whether to ease out to 1% during last 100ms
   * @param config.volume  Volume of the sound to play, value should be between 0.1 and 1
   */
  private playSound(sound: SoundSeries[], { type = 'sine', easeOut: shouldEaseOut = true, volume = 0.1 }: SoundConfig = {}): void {
    const { audioContext } = this;

    // graceful exit for browsers that don't support AudioContext
    if (!audioContext) {
      return;
    }

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.type = type;
    gainNode.gain.value = volume; // set default volume to 10%

    const { currentTime: audioCurrentTime } = audioContext;

    const totalDuration = sound.reduce((currentNoteTime, { key, duration }) => {
      oscillator.frequency.setValueAtTime(PIANO_KEYS[key], audioCurrentTime + currentNoteTime);
      return currentNoteTime + duration;
    }, 0);

    // ease out to 1% during last 100ms
    if (shouldEaseOut) {
      gainNode.gain.exponentialRampToValueAtTime(volume, audioCurrentTime + totalDuration - 0.1);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioCurrentTime + totalDuration);
    }

    oscillator.start(audioCurrentTime);
    oscillator.stop(audioCurrentTime + totalDuration);
  }

  /**
   * Play the winning sound effect
   * @returns Has sound effect been played
   */
  public win(): Promise<boolean> {
    if (this.isMuted) {
      return Promise.resolve(false);
    }

    const musicNotes: SoundSeries[] = [
      { key: 'C4', duration: 0.175 },
      { key: 'D4', duration: 0.175 },
      { key: 'E4', duration: 0.175 },
      { key: 'G4', duration: 0.275 },
      { key: 'E4', duration: 0.15 },
      { key: 'G4', duration: 0.9 }
    ];
    const totalDuration = musicNotes
      .reduce((currentNoteTime, { duration }) => currentNoteTime + duration, 0);

    this.playSound(musicNotes, { type: 'triangle', volume: 1, easeOut: true });

    return new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, totalDuration * 1000);
    });
  }

  /**
   * Play spinning sound effect for N seconds
   * @param durationInSecond  Duration of sound effect in seconds
   * @returns Has sound effect been played
   */
  public spin(durationInSecond: number): Promise<boolean> {
    if (this.isMuted) {
      return Promise.resolve(false);
    }

    const musicNotes: SoundSeries[] = [
      { key: 'D#3', duration: 0.1 },
      { key: 'C#3', duration: 0.1 },
      { key: 'C3', duration: 0.1 }
    ];

    const totalDuration = musicNotes
      .reduce((currentNoteTime, { duration }) => currentNoteTime + duration, 0);

    const duration = Math.floor(durationInSecond * 10);
    this.playSound(
      Array.from(Array(duration), (_, index) => musicNotes[index % 3]),
      { type: 'triangle', easeOut: false, volume: 2 }
    );

    return new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, totalDuration * 1000);
    });
  }
}
