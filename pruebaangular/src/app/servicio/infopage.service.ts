import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

//importar httpclient 

@Injectable({
  providedIn: 'root'
})
export class InfopageService {
  constructor(private http: HttpClient) { } // Inyecta HttpClient en el constructor

  fetchData() {
    return this.http.get<any[]>('./assets/data/productos.json'); // Ejemplo de uso de HttpClient en un servicio
  }
  

    
}