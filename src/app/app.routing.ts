import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RunnerComponent } from './runner/runner.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'runner',
    component: RunnerComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
