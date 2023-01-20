import { Component } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  mayorOMenor:string = 'mayor'
  estudiantes: Array<Estudiante>= [
    {
      id: 1,
      nombre: 'Ignacio',
      apellido: 'Martinez',
      edad: 19,
      estaAprobado: true,
      recursa: false
    },
    {
      id: 2,
      nombre: 'Victoria',
      apellido: 'Garcia',
      edad: 20,
      estaAprobado: true,
      recursa: false
    },
    {
      id: 3,
      nombre: 'Diego',
      apellido: 'Fuentes',
      edad: 17,
      estaAprobado: false,
      recursa: true
    },
    {
      id: 4,
      nombre: 'Milena',
      apellido: 'Rodriguez',
      edad: 21,
      estaAprobado: true,
      recursa: false
    },
    {
      id: 6,
      nombre: 'Juan',
      apellido: 'Caceres',
      edad: 17,
      estaAprobado: false,
      recursa: true
    },
    {
      id: 7,
      nombre: 'Esteban',
      apellido: 'Juarez',
      edad: 24,
      estaAprobado: true,
      recursa: false
    },
    {
      id: 8,
      nombre: 'Valentina',
      apellido: 'Torres',
      edad: 19,
      estaAprobado: true,
      recursa: false
    },
    {
      id: 9,
      nombre: 'Maria',
      apellido: 'Suarez',
      edad: 18,
      estaAprobado: true,
      recursa: false
    }
  ]

  
}
