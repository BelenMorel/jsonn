import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InicioComponent } from '../inicio/inicio.component';
import { Route } from '@angular/router';


@Component({
  selector: 'app-encabezado',
  standalone: true,
  imports: [RouterModule,
  InicioComponent,

],
  templateUrl: './encabezado.component.html',
  styleUrl: './encabezado.component.css'
})
export class EncabezadoComponent {

}
