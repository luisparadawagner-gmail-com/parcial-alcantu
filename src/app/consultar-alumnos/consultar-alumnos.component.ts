import { Component, OnInit } from '@angular/core';
import { Alumno } from '../clases/Alumno';
import { Router, ActivatedRoute } from '@angular/router';
import { ConsultarAlumnosService } from '../servicios/consultar-alumnos.service';

@Component({
  selector: 'app-consultar-alumnos',
  templateUrl: './consultar-alumnos.component.html',
  styleUrls: ['./consultar-alumnos.component.css']
})
export class ConsultarAlumnosComponent implements OnInit {

  displayedColumns: string[] = [ 'nombre', 'apellido', 'edad', 'materia', 'anio', 'editar' ];
  dataSource: any[] = [];

  constructor( private router: Router, private consultarAlumnosServicio: ConsultarAlumnosService, private route: ActivatedRoute ) { }

  listado: any;

  ngOnInit(): void {
    this.getAlumnos();
  }

  getAlumnos() {
		this.consultarAlumnosServicio.getAlumnos().subscribe((alumnos) => {
			debugger;
      this.dataSource = alumnos;
      
      this.listado = this.route.snapshot.params;
      if (Object.keys(this.listado).length) {
			this.addAlumno(this.listado);
		}
		});
  }

  addAlumno(alumno: Alumno) {
    debugger;
    this.dataSource.push(alumno);
  };
 
  editar(element) {
		debugger;
		this.router.navigate([ '/crearAlumno', element ]);
	}

}
