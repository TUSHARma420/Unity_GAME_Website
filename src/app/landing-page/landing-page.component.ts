import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

import { TranslationService } from '../translation.service';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('3000ms', style({ opacity: 1 }))
      ])
    ]),
    trigger('slideUp', [
      transition(':enter', [
        style({ transform: 'translateY(100px)', opacity: 0 }),
        animate('4000ms ease-in-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class LandingPageComponent {

  currentLanguage = 'english';

  constructor(private translationService: TranslationService) {}

  changeLanguage(language: string) {
    if (language === 'kannada') {
      this.currentLanguage = 'kannada';
    } else {
      this.currentLanguage = 'english';
    }
  }

  translateText(text: string): string {
    return this.translationService.translate(text, this.currentLanguage);
  }

  changeToEnglish() {
    this.currentLanguage = 'english';
  }

}
