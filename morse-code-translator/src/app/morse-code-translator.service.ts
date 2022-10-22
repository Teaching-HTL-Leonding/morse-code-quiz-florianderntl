import { Injectable } from '@angular/core';

const MORSE_CODE = [
  /* A */ '.-',
  /* B */ '-...',
  /* C */ '-.-.',
  /* D */ '-..',
  /* E */ '.',
  /* F */ '..-.',
  /* G */ '--.',
  /* H */ '....',
  /* I */ '..',
  /* J */ '.---',
  /* K */ '-.-',
  /* L */ '.-..',
  /* M */ '--',
  /* N */ '-.',
  /* O */ '---',
  /* P */ '.--.',
  /* Q */ '--.-',
  /* R */ '.-.',
  /* S */ '...',
  /* T */ '-',
  /* U */ '..-',
  /* V */ '...-',
  /* W */ '.--',
  /* X */ '-..-',
  /* Y */ '-.--',
  /* Z */ '--..',
];

@Injectable({
  providedIn: 'root'
})
export class MorseCodeTranslatorService {

  constructor() { }

  public encode(text: string): string {
    text = text.trim();
    let morseCode: string = '';

    for (let char of text) {
      if (char >= 'A' && char <= 'Z') {
        morseCode += ' ' + MORSE_CODE[char.charCodeAt(0) - 'A'.charCodeAt(0)];
      }
      else if (char === ' ') {
        if (morseCode[morseCode.length - 1] !== '/') {
          morseCode += ' /';
        }
      }
      else {
        throw new Error('Invalid text!');
      }
    }

    return morseCode.trimStart();
  }

  public decode(morseCode: string): string {
    if (morseCode === '') {
      return '';
    }

    let text = '';
    let splittedMorseCode: string[] = morseCode.split(' ');

    for (let singleMorseCode of splittedMorseCode) {
      if (singleMorseCode === '/') {
        text += ' ';
      }
      else {
        let morseCodeIx = MORSE_CODE.indexOf(singleMorseCode);
        if (morseCodeIx === -1) {
          throw Error('Invalid morse code!');
        }
        else {
          text += String.fromCharCode("A".charCodeAt(0) + morseCodeIx);
        }
      }
    }

    return text;
  }
}
