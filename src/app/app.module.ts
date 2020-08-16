import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/header/nav-bar/nav-bar.component';
import { BetBarComponent } from './components/header/bet-bar/bet-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { GameAreaComponent } from './pages/game-area/game-area.component';
import { LeaguesComponent } from './components/leagues/leagues.component';
import { EventsComponent } from './components/events/events.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { CoupomComponent } from './components/coupom/coupom.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
    BetBarComponent,
    HomeComponent,
    GameAreaComponent,
    LeaguesComponent,
    EventsComponent,
    EventDetailsComponent,
    CoupomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
