import { Injectable } from '@angular/core';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translations: Translations = {
    english: {
      'Unity Game': 'Unity Game',
      'Game 1': 'Game 1',
      'Game 2': 'Game 2',
     'Welcome to Unity App':'Welcome to Unity App',
     'Unity is Strength':'Unity is Strength',
      'Experience the power of unity and collaboration.':'Experience the power of unity and collaboration.',
      'Get Started':'Get Started',
    },
    
    kannada: {
      'Unity Games': 'ಯುನಿಟಿ ಆಟ',
      'Game 1': 'ಆಟ 1',
      'Game 2': 'ಆಟ 2',
      'Welcome to Unity App':'ಏಕತೆ - Unity',
      'Unity is Strength':'',
      'Experience the power of unity and collaboration.':'ಒಂದು ಆಟದ ಮೂಲಕ ಸಹಭಾಗಿಗಳೊಂದಿಗೆ ಕೂಡುವುದು ಹೇಗೆ ಎಂದು ನೋಡಿ.',
      'Collaboration': 'ಸಹಕಾರ',
      'Work together towards common goals and achieve greatness.': 'ಸಾಧಾರಣ ಉದ್ದೇಶಗಳನ್ನು ಸಹ ಕೆಲಸ ಮಾಡಿ ಮಹತ್ವವನ್ನು ಪಡೆಯಿರಿ.',
      'Innovation': 'ಮೂಲಭೂತ ಹೊಂದಾಣಿಕೆ',
      'Explore new ideas and push the boundaries of what is possible.': 'ಹೊಸ ಕನಸುಗಳನ್ನು ಅನ್ವೇಷಿಸಿ ಮತ್ತು ಸಾಧ್ಯವಾದ ಮಿತಿಗಳನ್ನು ನೇರವಾಗಿ ಎಳೆಯಿರಿ.',
      'Success': 'ಯಶಸ್ಸು',
      'Achieve success by leveraging the power of unity.': 'ಏಕತೆ ಶಕ್ತಿಯನ್ನು ಉಪಯೋಗಿಸುವ ಮೂಲಕ ಯಶಸ್ಸನ್ನು ಸಾಧಿಸಿ.',
      'Get Started': 'ಪ್ರಾರಂಭಿಸಿ',
      'Eye-Catching Information': 'ಕಣ್ಣೀರು ಸೆಳೆತ',
      'Don\'t Burn (Lakshmi Bombs) Crackers': 'ಪಟಾಕಿಗಳನ್ನು ಬೆಂಡಿಸಬೇಡಿ (ಲಕ್ಷ್ಮಿ ಬಾಂಬ್‌ಗಳು)',
      'Whenever you visit a city, please avoid burning crackers, especially Lakshmi bombs, to protect the environment and promote a cleaner and healthier celebration.':
        'ನೀವು ಯಾವಾಗಲೂ ನಗರಕ್ಕೆ ಭೇಟಿ ನೀಡುವಾಗ, ವಾತಾವರಣವನ್ನು ರಕ್ಷಿಸಲು ಮತ್ತು ಹಗಲುಹೆನ್ನೆಯ ಆಚರಣೆಯನ್ನು ಪ್ರಚಾರಗೊಳಿಸಲು ಲಕ್ಷ್ಮಿ ಬಾಂಬ್‌ಗಳು ಮುಖ್ಯವಾಗಿ ಪಟಾಕಿಗಳನ್ನು ಹೊತ್ತು ಸುರಿಯಬೇಡಿ.',
      'Science Museum & Government Library': 'ವಿಜ್ಞಾನ ಸಂಗ್ರಹಾಲಯ ಮತ್ತು ಸರ್ಕಾರಿ ಗ್ರಂಥಾಲಯ',
      'Make sure to allocate at least one day during your visit to a city to explore the local science museum and government library. It\'s a great opportunity to learn and explore new things.':
        'ನೀವು ನಗರಕ್ಕೆ ಭೇಟಿ ನೀಡುವ ದಿನದಲ್ಲಿ ಸ್ಥಳೀಯ ವಿಜ್ಞಾನ ಸಂಗ್ರಹಾಲಯ ಮತ್ತು ಸರ್ಕಾರಿ ಗ್ರಂಥಾಲಯವನ್ನು ಅನ್ವೇಷಿಸಲು ಕಡಿಮೆಯಾದರೂ ಒಂದು ದಿನ ನಿರ್ಧಾರಿಸಿ. ಇದು ಹೊಸ ವಿಷಯಗಳನ್ನು ಕಲಿಯುವ ಒಂದು ಸುಂದರ ಅವಕಾಶವಾಗಿದೆ.',
      'www.nic.gov.in': 'www.nic.gov.in',
      'Visit the official website of the Government of India (www.nic.gov.in) to access valuable information, resources, and services provided by various government departments and agencies.':
        'ಭಾರತ ಸರ್ಕಾರದ ಅಧಿಕೃತ ವೆಬ್‌ಸೈಟ್ (www.nic.gov.in) ಗೆ ಭೇಟಿ ನೀಡಿ ವಿವರಣೆಗಳನ್ನು, ಸಂಪನ್ಮೂಲಗಳನ್ನು ಮತ್ತು ವಿವಿಧ ಸರ್ಕಾರಿ ಇಲಾಖೆಗಳು ಮತ್ತು ಸಂಸ್ಥೆಗಳು ಒದಗಿಸುವ ಸೇವೆಗಳನ್ನು ಪಡೆಯಲು.',
      'Employment Newspaper': 'ಉದ್ಯೋಗ ವಾರಪತ್ರಿಕೆ',
      'Make it a habit to check the Employment Newspaper weekly to stay updated on job opportunities and increase your chances of finding a good job that suits your skills and interests.':
        'ಉದ್ಯೋಗ ಸಂಬಂಧಿತ ಅವಕಾಶಗಳ ಮೇಲೆ ನಿಮ್ಮ ಅಪ್ಡೇಟ್ ಮಾಡಲು ಮತ್ತು ನಿಮ್ಮ ಹುದ್ದೆಗೆ ಹೊಂದಿಕೆಯಾಗುವ ಅವಕಾಶಗಳನ್ನು ಹೆಚ್ಚಿಸಲು ಉದ್ಯೋಗ ವಾರಪತ್ರಿಕೆಯನ್ನು ವಾರಾನ್ನಿಯಲ್ಲಿ ಪರೀಕ್ಷಿಸುವುದು ಒಂದು ಅಭ್ಯಾಸವಾಗಿರಿ.',
      'Promote Swadeshi': 'ಸ್ವದೇಶಿಯನ್ನು ಪ್ರಚಾರಗೊಳಿಸಿ',
      'Support the Swadeshi (Buy Indian) movement by consciously choosing and promoting Indian-made products and services. This helps in boosting the local economy and preserving traditional industries.':
        'ಭಾರತೀಯ ನಿರ್ಮಿತ ಉತ್ಪಾದಗಳನ್ನು ಎಚ್ಚರಿಕೆಯಿಂದ ಆಯ್ಕೆ ಮಾಡಿ ಮತ್ತು ಅದರ ಮೂಲಕ ಸ್ವದೇಶಿ (ಭಾರತೀಯರ ಉಪಯೋಗದ) ಚಳುವಳಿಯನ್ನು ಬೆಳೆಸಿ. ಇದು ಸ್ಥಳೀಯ ಆರ್ಥಿಕತೆಗೆ ಚಳುವಳಿ ನೀಡುವುದು ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ಕೆಲಸಗಳನ್ನು ಉಳಿಸುವುದರಲ್ಲಿ ಸಹಾಯಮಾಡುವುದು.',
        "Celebrating India's Cultural Diversity: Embracing Unity in Diversity": 'ಭಾರತದ ಸಾಂಪ್ರದಾಯಿಕ ವೈವಿಧ್ಯವನ್ನು ಆಚರಿಸುವುದು: ಏಕತೆಯನ್ನು ವೈವಿಧ್ಯದಲ್ಲಿ ಆಲೋಚಿಸುವುದು',
        'Volunteering for Social Causes: Uniting Indians through Service': 'ಸಾಮಾಜಿಕ ಕಾರ್ಯಗಳಿಗಾಗಿ ಸ್ವಯಂಸೇವೆ ಮಾಡುವುದು: ಸೇವೆಯ ಮೂಲಕ ಭಾರತೀಯರನ್ನು ಒಂದುಗೂಡಿಸುವುದು',
        'Embracing Regional Cuisine: Strengthening Bonds through Food': 'ಪ್ರದೇಶಿಕ ಆಹಾರವನ್ನು ಆಪೂರ್ತಿಸುವುದು: ಆಹಾರದ ಮೂಲಕ ಬಂಧನಗಳನ್ನು ಬಲಪಡಿಸುವುದು',
      'Food has long been recognized as a unifying element in India, and this article delves into the diverse culinary traditions of different regions. By showcasing the unique flavors, ingredients, and cooking techniques from various parts of the country, the article emphasizes how regional cuisine can bridge cultural gaps and foster a sense of unity. It encourages readers to explore and appreciate the culinary diversity of India as a way to strengthen bonds and promote cross-cultural understanding.':'ಆಹಾರ ಭಾರತದಲ್ಲಿ ಒಂದು ಏಕೀಕರಣ ಅಂಶವೆಂದು ಹಿಂದಿನಿಂದಲೂ ಗುರುತಿಸಲ್ಪಟ್ಟಿದೆ ಮತ್ತು ಈ ಲೇಖನವು ವಿಭಿನ್ನ ಪ್ರದೇಶಗಳ ವಿವಿಧ ಪಾಕಶಾಸ್ತ್ರೀಯ ಸಂಪ್ರದಾಯಗಳನ್ನು ಅರಿಯುವುದನ್ನು ಹೊರತೆಗೆದು ಹಾಕುತ್ತದೆ. ದೇಶದ ವಿವಿಧ ಭಾಗಗಳಿಂದ ಬಂದ ಅನೋಕ ರುಚಿ, ಸಾಮಗ್ರಿಗಳು ಮತ್ತು ವಾನಗಳನ್ನು ಪ್ರದರ್ಶಿಸುವುದರ ಮೂಲಕ, ಲೇಖನ ಪ್ರದರ್ಶಿಸುವುದು ಪ್ರದೇಶಿಕ ಆಹಾರ ಎಂದು ಹೇಗೆ ಸಾಂಪ್ರದಾಯಿಕ ಅಂತರಗಳನ್ನು ಮೀರಿಸಿಕೊಳ್ಳಬಲ್ಲುದು ಮತ್ತು ಏಕತೆಯ ಭಾವನೆಯನ್ನು ಸೃಷ್ಟಿಸುತ್ತದೆ ಎಂದು ಪ್ರಕಟಿಸುತ್ತದೆ. ಭಾರತದ ಆಹಾರ ವೈವಿಧ್ಯವನ್ನು ಅನ್ವೇಷಿಸಿ ಮತ್ತು ಮೂಲೆಗೆಡವುವುದು ಮತ್ತು ಅನುಭವಿಸುವುದು ಓದುಗರಿಗೆ ಸಲುಗು ಮತ್ತು ಪರಸ್ಪರ ಸಂಕೀರ್ಣ ಅರಿವನ್ನು ಸಾಧಿಸುವ ಒಂದು ಮಾರ್ಗವಾಗಿದೆ.',
      'Volunteering is a powerful tool that brings people from diverse backgrounds together to work towards a common social cause. This article explores the impact of volunteerism in India, highlighting inspiring stories of individuals and organizations that have successfully united people across communities to create positive change. It emphasizes the transformative power of collective action and encourages readers to engage in volunteer work as a means to promote unity and social cohesion.':'ಸ್ವಯಂಸೇವೆ ವೈವಿಧ್ಯಮಯ ಹಿನ್ನೆಲೆಯಿಂದ ಬರುವ ಜನರನ್ನು ಸಮೂಹಗಳನ್ನು ಒಂದು ಸಾಮಾನ್ಯ ಸಾಮಾಜಿಕ ಕಾರ್ಯಕ್ಕೆ ಒಂದುಗೂಡಿಸುವ ಶಕ್ತಿಯುಂಟು ಮಾಡುತ್ತದೆ. ಈ ಲೇಖನದಲ್ಲಿ ಸ್ವಯಂಸೇವೆಯ ಪರಿಣಾಮವನ್ನು ಭಾರತದಲ್ಲಿ ಅನ್ವೇಷಿಸಲಾಗುತ್ತದೆ. ಜನರನ್ನು ಒಂದು ಸಮುದಾಯದಿಂದ ಇತರ ಸಮುದಾಯಗಳಲ್ಲಿ ಒಗ್ಗಿಸಲು ಯಶಸ್ವಿಯಾಗಿರುವ ವ್ಯಕ್ತಿಗಳ ಮತ್ತು ಸಂಸ್ಥೆಗಳ ಆದ್ಯಂತವನ್ನು ಗ್ರಹಿಸುತ್ತದೆ. ಇದು ಸಮೂಹದ ಸಂಗಡ ನಡೆಸುವ ಕೂಟಾಯಿತ ಕ್ರಿಯೆಯ ಬದಲಾವಣೆಯ ಶಕ್ತಿಯನ್ನು ಹೆಚ್ಚಿಸುತ್ತದೆ ಮತ್ತು ಏಕತೆ ಮತ್ತು ಸಾಮಾಜಿಕ ಅನ್ನದ ಬೆಳವಣಿಗೆಗೆ ಸ್ವಾಧೀನಕ್ಕೆ ಕಾರಣವನ್ನು ನೀಡುತ್ತದೆ.',
      "India is renowned for its rich cultural diversity, encompassing various traditions, festivals, and languages. This article delves into the beauty of India's cultural tapestry and emphasizes the importance of celebrating and respecting diverse cultural practices. By highlighting the common threads that connect different communities across the country, the article promotes unity and fosters a sense of pride in India's multicultural heritage.":'ಭಾರತ ವಿವಿಧ ಸಂಸ್ಕೃತಿಯ ವೈವಿಧ್ಯವನ್ನು ಒಳಗೊಂಡ ಅದ್ಭುತ ದೇಶವೆಂದು ಪ್ರಖ್ಯಾತವಾಗಿದೆ. ಈ ಲೇಖನ ಭಾರತದ ಸಂಸ್ಕೃತಿಯ ಹೆಸರುವಾಸ್ತವವನ್ನು ಅರಿಯುವ ಮೂಲಕ ಮತ್ತು ವಿವಿಧ ಸಂಸ್ಕೃತಿಗಳ ಅಭಿವೃದ್ಧಿಗೆ ಆದರವನ್ನು ಕೊಡುವುದು ಮಹತ್ವವನ್ನು ಹೇಳುತ್ತದೆ. ವಿಭಿನ್ನ ಸಮುದಾಯಗಳನ್ನು ಕೂಡಿಸುವ ಸಾಮಾನ್ಯ ಕೇತೆಗಳನ್ನು ಎತ್ತಿತೋರುವುದರ ಮೂಲಕ, ಈ ಲೇಖನ ಏಕತೆಯನ್ನು ಪ್ರಚಾರ ಮಾಡುತ್ತದೆ ಮತ್ತು ಭಾರತದ ಬಹುಸಂಸ್ಕೃತಿಕ ಪರಂಪರೆಯಲ್ಲಿ ಗರ್ವ ಹುಟ್ಟುವಂತೆ ಮಾಡುತ್ತದೆ.',
     


      }
  };

  translate(text: string, currentLanguage: string): string {
    const translatedText = this.translations[currentLanguage]?.[text];
    return translatedText ?? text;
  }
}
