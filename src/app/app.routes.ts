import { Routes } from '@angular/router';
import { Counter } from './pages/counter/counter';
import { Hero } from './pages/hero/hero';
import { Dragonball } from './pages/dragonball/dragonball';

export const routes: Routes = [
  { path: '', component: Counter, title: 'Home' },
  { path: 'hero', component: Hero, title: 'Hero', pathMatch: 'full' },
  { path: 'dragonball', component: Dragonball, title: 'Dragonball', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];
