import { Injectable, inject } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

//importar httpclient 

@Injectable({
  providedIn: 'root'
})
export class InfopageService {

  constructor(private http: HttpClient) {}
  dataOnline!: Observable<any[]>; // Define dataOnline como un Observable<any[]>

  fetchdatajson() {
    this.dataOnline = this.http.get<any[]>('/assets/data/productos.json'); // Asigna la solicitud HTTP al Observable
  }

  alumno: any []=[
    { id: 0, nombre: 'Belen', apellido: 'Morel', edad: 24 },
    { id: 1, nombre: 'Magdalena', apellido: 'Morel', edad: 24 },
  ];//array que esta en el servicio

  
  getAlumno(): any[] {
    return this.alumno; // Devuelve el array alumno que esta en este mismo servicio
  }

    
}