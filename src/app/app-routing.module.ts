import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearAlumnoComponent } from './crear-alumno/crear-alumno.component';
import { ConsultarAlumnosComponent } from './consultar-alumnos/consultar-alumnos.component';



const routes: Routes = [
  { path: 'crearAlumno', component :  CrearAlumnoComponent},
  { path: 'consultarAlumno', component : ConsultarAlumnosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
