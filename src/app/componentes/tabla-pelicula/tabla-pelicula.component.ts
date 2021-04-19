import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {

  @Input('peliculas') listadoDePeliculas: Pelicula[];
  @Output() peliculaSeleccionadaEvento: EventEmitter<any> = new EventEmitter<any>();
  @Output() peliculaAEliminarEvento: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
  }

  seleccioneUnaPelicula(pelicula: Pelicula){
    console.info(pelicula);
    this.peliculaSeleccionadaEvento.emit(pelicula);
  }

  eliminarUnaPelicula(pelicula: Pelicula){
    this.peliculaAEliminarEvento.emit(pelicula);
  }

}
