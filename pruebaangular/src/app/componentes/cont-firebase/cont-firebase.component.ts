import { Component } from '@angular/core';
import { InfofirebaseService } from '../../servicio/infofirebase.service';

@Component({
  selector: 'app-cont-firebase',
  standalone: true,
  imports: [],
  templateUrl: './cont-firebase.component.html',
  styleUrl: './cont-firebase.component.css'
})
export class ContFirebaseComponent {

  // constructor (private infofirebaseService: InfofirebaseService){
  //   console.log(this.dataFire)
  // }

  // dataFire: any []=[];

  // ngOnInit(): void {
  //   this.infofirebaseService.fechOnlinedtfire().subscribe((data: any[]) => {
  //     this.dataFire = data;
  //   });
  // }

}
