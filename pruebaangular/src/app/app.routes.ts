import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NovedadesComponent } from './componentes/novedades/novedades.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { ContFirebaseComponent } from './componentes/cont-firebase/cont-firebase.component';

export const routes: Routes = [
    {path: 'inicio',component: InicioComponent},
    {path: 'novedades', component: NovedadesComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'firebase', component: ContFirebaseComponent},

    {path:'**', pathMatch:'full', redirectTo: 'inicio'}
];
