import Keyboard from './Keyboard';

export default abstract class Pad{

    keyCode: number
    audioBuffer: AudioBuffer
    gainKnob: AudioNode
    filterKnob: AudioNode
    pitchKnob: number
    audioContext: AudioContext
    audioSource: AudioBufferSourceNode
    songURL: string
    keyboard: Keyboard


    constructor(keyboard: Keyboard, keyCode: number, audioContext: AudioContext){
        this.keyboard = keyboard;
        this.keyCode = keyCode;
        this.audioContext = audioContext;
        this.gainKnob = audioContext.createGain();
        this.filterKnob = audioContext.createBiquadFilter();
    }

    getKeyCode(): number{
        return this.keyCode;
    }

    setKeyCode(keyCode: number):void{

        const previousKeyCode = this.keyCode;
        this.keyCode = keyCode;

        this.keyboard.setPad(this, previousKeyCode);

    }

    establishAudioSource(){
        this.audioSource = this.audioContext.createBufferSource();
        this.audioSource.buffer = this.audioBuffer;
        this.audioSource.connect(this.audioContext.destination);
    }

    play(){
        this.establishAudioSource();
        this.audioSource.start();
    }

}