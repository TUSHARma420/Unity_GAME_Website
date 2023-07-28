import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import { Game1Component } from './game1/game1.component';
import { Game2Component } from './game2/game2.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { Game3Component } from './game3/game3.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'game', component: GamePageComponent },
  { path: 'game1', component: Game1Component },
  { path: 'game2', component: Game2Component },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'game3', component: Game3Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
