import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';



import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NovedadesComponent } from './componentes/novedades/novedades.component';
import { PiepaginaComponent } from './componentes/piepagina/piepagina.component';
import { ProductosComponent } from './componentes/productos/productos.component';

@Component({
  selector: 'app-root',

  standalone: true,
  imports: [RouterOutlet,
  InicioComponent,
  NovedadesComponent,
  PiepaginaComponent,
  EncabezadoComponent,
  RouterModule, 
  HttpClientModule,
  ProductosComponent,
  FormsModule,
  
  
  
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pruebaangular';


  
}
