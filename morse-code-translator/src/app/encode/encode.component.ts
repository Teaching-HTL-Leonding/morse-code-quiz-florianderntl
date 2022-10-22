import { Component, OnInit } from '@angular/core';
import { MorseCodePlayerService, SYMBOL_BREAK, LETTER_BREAK, WORD_BREAK } from '../morse-code-player.service';
import { MorseCodeTranslatorService } from '../morse-code-translator.service';

@Component({
  selector: 'app-encode',
  templateUrl: './encode.component.html',
  styleUrls: ['./encode.component.css']
})
export class EncodeComponent {
  public text: string;
  public morseCode: string;

  constructor(private morseCodeTranslator: MorseCodeTranslatorService, private morseCodePlayer: MorseCodePlayerService) {
    this.text = '';
    this.morseCode = '';
  }

  public encode() {
    try {
      this.morseCode = this.morseCodeTranslator.encode(this.text);
    } catch (Error) {
      this.morseCode = 'Error: Please enter a valid text!';
    }
  }

  public async playMorseCode() {
    for (let char of this.morseCode) {
      if (char === '.') {
        await this.morseCodePlayer.playDot();
        await this.morseCodePlayer.sleep(SYMBOL_BREAK);
      }
      else if (char === '-') {
        await this.morseCodePlayer.playDash();
        await this.morseCodePlayer.sleep(SYMBOL_BREAK);
      }
      else if (char === ' ') {
        await this.morseCodePlayer.sleep(LETTER_BREAK);
      }
      else if (char === '/') {
        await this.morseCodePlayer.sleep(WORD_BREAK);
      }
    }
  }
}
