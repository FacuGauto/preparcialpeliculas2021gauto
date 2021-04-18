import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../clases/pelicula';

@Component({
  selector: 'app-busqueda-pelicula',
  templateUrl: './busqueda-pelicula.component.html',
  styleUrls: ['./busqueda-pelicula.component.css']
})
export class BusquedaPeliculaComponent implements OnInit {
  listadoDePeliculas: Pelicula[];
  peliculaSeleccionada: Pelicula;

  constructor() {
    this.listadoDePeliculas = [
      {id: 0, nombre: 'Bastardos sin gloria', tipo: 'guerra', fechadeestreno: '2009', cantidadDePublico: 1000,fotoDePelicula: './../../../assets/bastardosSinGloria.jpeg'},
      {id: 1, nombre: 'El proyecto de la bruja de Blair', tipo: 'terror', fechadeestreno: '1999', cantidadDePublico: 1000,fotoDePelicula: './../../../assets/brujaDeBlair.jpeg'},
      {id: 2, nombre: 'John Wick', tipo: 'accion', fechadeestreno: '2014', cantidadDePublico: 1000,fotoDePelicula: './../../../assets/johnWick.jpeg'},
      {id: 3, nombre: 'Borat', tipo: 'comedia', fechadeestreno: '2007', cantidadDePublico: 1000,fotoDePelicula: './../../../assets/borat.jpeg'},
      {id: 4, nombre: 'La isla siniestra', tipo: 'Suspenso', fechadeestreno: '2010', cantidadDePublico: 2000,fotoDePelicula: './../../../assets/laIslaSiniestra.jpeg'}
    ];
   }

  ngOnInit(): void {
  }

  cargarPeliculaSeleccionada(pelicula: Pelicula){
    this.peliculaSeleccionada = pelicula;
  }

  cargarNuevaPelicula(pelicula: Pelicula){
    this.listadoDePeliculas.push(pelicula);
  }

}
