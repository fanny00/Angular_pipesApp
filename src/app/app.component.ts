import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesApp';
  valor: number = 1000;
  obj = {
    nombre: 'Fernando'
  }

  nombre: string = 'fernANdo herREra';

  mostrarNombre() {
    console.log( this.nombre );
    console.log( this.valor );
    console.log( this.obj );
  }
}
