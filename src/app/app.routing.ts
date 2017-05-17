import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RunnerComponent } from './runner/runner.component';
import { SlidePuzzleComponent } from './slide-puzzle/slide-puzzle.component';
import { WebcrawlerComponent } from './webcrawler/webcrawler.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'runner',
    component: RunnerComponent
  },
  {
    path: 'slide-puzzle',
    component: SlidePuzzleComponent
  },
  {
    path: 'webcrawler',
    component: WebcrawlerComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
