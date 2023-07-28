import { Component } from '@angular/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent {
  currentLanguage = 'english';
  expandedPostcardIndex: number | null = null;

  constructor(private translationService: TranslationService) {}

  changeLanguage(language: string) {
    this.currentLanguage = language;
  }

  translateText(text: string): string {
    return this.translationService.translate(text, this.currentLanguage);
  }

  expandPostcard(index: number) {
    this.expandedPostcardIndex = index;
  }

  resetPostcards() {
    this.expandedPostcardIndex = null;
  }
  changeToEnglish() {
    this.currentLanguage = 'english';
  }
}

 

