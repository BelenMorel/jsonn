import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfopageService } from '../../servicio/infopage.service';




@Component({
  selector: 'app-novedades',
  standalone: true,
  imports: [
    CommonModule,
    ],
  templateUrl: './novedades.component.html',
  styleUrl: './novedades.component.css'
})
export class NovedadesComponent implements OnInit {

  dataLocal: any[] = []; // datos del json
  alumnos: any[] = []; // Array para almacenar los datos

  constructor(private infopageService: InfopageService) {}

  mostrarenconsola(){
    console.log(this.alumnos)
    console.log(this.dataLocal)
  }

  
  ngOnInit(): void {
    this.alumnos = this.infopageService.getAlumno(); // Obtiene el array alumno desde el servicio
    this.infopageService.fetchdatajson(); // Llamada al método para recuperar los datos

    // Suscríbete a dataOnline y maneja los datos recibidos
    this.infopageService.dataOnline.subscribe((data: any[]) => {
      this.dataLocal = data;
    });
  }
}
