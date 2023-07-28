import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import { Game1Component } from './game1/game1.component';
import { Game2Component } from './game2/game2.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Game3Component } from './game3/game3.component';




@NgModule({
  declarations: [
    AppComponent,
    
    LandingPageComponent,
         GamePageComponent,
         Game1Component,
         Game2Component,
         NavComponent,
         AboutComponent,
         ContactComponent,
         Game3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

