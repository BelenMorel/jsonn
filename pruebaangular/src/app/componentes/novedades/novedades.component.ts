import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient} from '@angular/common/http';
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

  datas: any[] = []; // Array para almacenar los datos

  constructor(private dataService: InfopageService) {}

  ngOnInit() {
    this.dataService.fetchData().subscribe(data => {
      // Asignar los datos al array datas
      this.datas = data;
    });
  }
}