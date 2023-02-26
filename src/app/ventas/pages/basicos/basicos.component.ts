import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'fanny';
  nombreUpper: string = 'FANNY';
  nombreCompleto: string = 'fAnnY cAmpOS';

  fecha: Date = new Date(); // el día de hoy

}
