import { Routes } from '@angular/router';
import { ASaucedo } from './a-saucedo/a-saucedo';
import { CAvendano } from './c-avendano/c-avendano';
import { OCastillo } from './o-castillo/o-castillo';
import { ELeyva } from './e-leyva/e-leyva';
import { ACandia } from './a-candia/a-candia';
import { BArreola } from './b-arreola/b-arreola';

export const routes: Routes = [
  { path: 'a-saucedo', component: ASaucedo },
  { path: 'c-avendano', component: CAvendano },
  { path: 'o-castillo', component: OCastillo },
  { path: 'e-leyva', component: ELeyva },
  { path: 'a-candia', component: ACandia },
  { path: 'b-arreola', component: BArreola },
  { path: '', redirectTo: 'c-avendano', pathMatch: 'full' }
];