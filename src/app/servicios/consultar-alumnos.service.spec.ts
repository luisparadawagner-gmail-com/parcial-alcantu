import { TestBed } from '@angular/core/testing';

import { ConsultarAlumnosService } from './consultar-alumnos.service';

describe('ConsultarAlumnosService', () => {
  let service: ConsultarAlumnosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultarAlumnosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
