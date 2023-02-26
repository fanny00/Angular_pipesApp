import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

   nombre: string = 'Fanny';
   genero: string = 'femenino';

   invitacionMapa = {
    'marculino' : 'invitarlo',
    'femenino'  : 'invitarla'
   }

}
