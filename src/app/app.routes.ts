import { Routes } from '@angular/router';
import { Counter } from './pages/counter/counter';
import { Hero } from './pages/hero/hero';
import { Dragonball } from './pages/dragonball/dragonball';
import { DragonballSuper } from './pages/dragonball-super/dragonball-super';

export const routes: Routes = [
  { path: '', component: Counter, title: 'Home' },
  { path: 'hero', component: Hero, title: 'Hero', pathMatch: 'full' },
  { path: 'dragonball', component: Dragonball, title: 'Dragonball', pathMatch: 'full' },
  {
    path: 'dragonball-super',
    component: DragonballSuper,
    title: 'Dragonball Super',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: '' },
];
