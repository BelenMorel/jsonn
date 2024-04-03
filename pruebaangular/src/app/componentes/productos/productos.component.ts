import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    ],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

    private http = inject(HttpClient);

    dataOnline: any[] = []; // Datos del JSON en línea
  
    
    constructor(){
      console.log("componente productos")
    }
    // JSON en línea
    fetchOnlineData() {
      this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res) => {
        this.dataOnline = res as any[];
      });
    }

    ngOnInit() {
      this.fetchOnlineData();
    }
    
  }
  


