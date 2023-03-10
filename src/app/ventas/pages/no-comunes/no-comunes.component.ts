import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect 
  nombre: string = 'Fanny';
  genero: string = 'femenino';

  invitacionMapa = {
    'marculino' : 'invitarlo',
    'femenino'  : 'invitarla'
  }


  // i18nPlural
  clientes: string[] = ['María', 'Juan', 'Pedro', 'Carolina', 'Fernando'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'Tenemos un cliente esperando',
    'other': 'Tenemos # clientes esperando'
  }

  cambiarCliente() {
    
    this.nombre = 'Fernando';
    this.genero = 'marculino';
  }

  borrarCliente() {
    this.clientes.pop();
  }


  // KeyValue Pipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Ottawa, Canadá'
  }


  // Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]


  // Async Pipe
  miObservable = interval(5000); // 0, 1, 2, 3

  valorPromesa = new Promise( (resolve, reject) => {
     setTimeout(() => {
       resolve( 'Tenemos data de promesa' );
     }, 3500 )
  });

}
