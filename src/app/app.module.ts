import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { EpisodeComponent } from './components/episode/episode.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { CharactersComponent } from './components/characters/characters.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainLayoutComponent,
    EpisodesComponent,
    EpisodeComponent,
    CharactersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
