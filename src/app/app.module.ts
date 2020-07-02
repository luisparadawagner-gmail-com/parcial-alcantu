import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';

import { CrearAlumnoComponent } from './crear-alumno/crear-alumno.component';
import { ConsultarAlumnosComponent } from './consultar-alumnos/consultar-alumnos.component';
import { ConsultarAlumnosService } from './servicios/consultar-alumnos.service';

@NgModule({
  declarations: [
    AppComponent,
    CrearAlumnoComponent,
    ConsultarAlumnosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatMenuModule,
    MatTableModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [ConsultarAlumnosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
