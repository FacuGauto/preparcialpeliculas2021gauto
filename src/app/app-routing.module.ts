import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { BusquedaPeliculaComponent } from './busqueda-pelicula/busqueda-pelicula.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: '/busqueda'},
  {path:'busquedapeliculas', component: BusquedaPeliculaComponent},
  {path:'bienvenido', component: BienvenidoComponent},
  {path:'**', component: BusquedaPeliculaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
