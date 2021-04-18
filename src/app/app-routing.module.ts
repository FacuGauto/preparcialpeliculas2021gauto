import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { BusquedaPeliculaComponent } from './busqueda-pelicula/busqueda-pelicula.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: '/home'},
  {path:'home', component: BusquedaPeliculaComponent},
  {path:'bienvenidos', component: BienvenidoComponent},
  {path:'**', component: BusquedaPeliculaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
