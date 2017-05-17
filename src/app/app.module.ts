import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'yuki-createjs';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { RunnerComponent } from './runner/runner.component';
import { HomeComponent } from './home/home.component';
import { SlidePuzzleComponent } from './slide-puzzle/slide-puzzle.component';

@NgModule({
  declarations: [
    AppComponent,
    RunnerComponent,
    HomeComponent,
    SlidePuzzleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
