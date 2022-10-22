import { Component, OnInit } from '@angular/core';
import { MorseCodeTranslatorService } from '../morse-code-translator.service';

@Component({
  selector: 'app-decode',
  templateUrl: './decode.component.html',
  styleUrls: ['./decode.component.css']
})
export class DecodeComponent {
  public text: string;
  public morseCode: string;

  constructor(private morseCodeTranslator: MorseCodeTranslatorService) {
    this.text = '';
    this.morseCode = '';
  }

  public decode() {
    try {
      this.text = this.morseCodeTranslator.decode(this.morseCode);
    } catch (Error) {
      this.text = "Error: Please enter a valid morse code!";
    }
  }
}
