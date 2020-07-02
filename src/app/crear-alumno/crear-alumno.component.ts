import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from '../clases/Alumno';

@Component({
  selector: 'app-crear-alumno',
  templateUrl: './crear-alumno.component.html',
  styleUrls: ['./crear-alumno.component.css']
})
export class CrearAlumnoComponent implements OnInit {

  constructor( private fb: FormBuilder, private route: ActivatedRoute, private router: Router ) { }

  alumnoForm: FormGroup;
  alumno : Alumno;
  consultarAlumno: any;

  ngOnInit(): void {
    this.consultarAlumno = this.route.snapshot.params;

		if (Object.keys(this.consultarAlumno).length) {
			this.alumno = this.consultarAlumno;
		} else {
			this.alumno = this.consultarAlumno;
		}

		this.cargarDatos(this.alumno);
  }

  cargarDatos(editar: Alumno){
    this.alumnoForm = this.fb.group({
      nombre: [editar ? editar.nombre : '', Validators.required],
      apellido: [editar ? editar.apellido : ''],
      edad: [editar ? editar.edad: ''],
      materia: [editar ? editar.materia: ''],
      anio: [editar ? editar.anio: ''],
    });
  }

  submit(){
    debugger;
    this.alumnoForm.value;
    this.alumno = this.alumnoForm.value;
    this.router.navigate([ '/consultarAlumno', this.alumno ]);
  }

}
