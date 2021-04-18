import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-alta-pelicula',
  templateUrl: './alta-pelicula.component.html',
  styleUrls: ['./alta-pelicula.component.css']
})
export class AltaPeliculaComponent implements OnInit {
  peliculaNueva: Pelicula | any;
  @Output() EventoCrearNuevaPelicula: EventEmitter<any> = new EventEmitter<any>();

  constructor() { 
  }

  ngOnInit(): void {
  }

  guardarNuevaPelicula(){
    this.EventoCrearNuevaPelicula.emit(this.peliculaNueva);
    this.peliculaNueva = null;
  }

  hacerNuevaPelicula(){
    this.peliculaNueva = new Pelicula();    
  }

}
