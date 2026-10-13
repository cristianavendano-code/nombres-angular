import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// 1. Importas los componentes desde sus carpetas
import { ASaucedo } from './a-saucedo/a-saucedo';
import { CAvendano } from './c-avendano/c-avendano';
import { OCastillo } from './o-castillo/o-castillo';
import { ELeyva } from './e-leyva/e-leyva';
import { ACandia } from './a-candia/a-candia';
import { BArreola } from './b-arreola/b-arreola';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    // 2. Los agregas aquí para poder usarlos en el HTML
    ASaucedo,
    CAvendano,
    OCastillo,
    ELeyva,
    ACandia,
    BArreola
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'nombres-angular';
}