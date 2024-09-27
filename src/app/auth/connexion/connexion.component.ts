import { Component } from '@angular/core';
import { HearderComponent } from '../../hearder/hearder.component';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [HearderComponent,RouterModule,ReactiveFormsModule],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {
  con_registe:FormGroup= new FormGroup({
    contact:new FormControl(null,Validators.required),
    password:new FormControl(null,Validators.required)
  })
 validation(event:Event){
       event.preventDefault()
       if(this.con_registe.valid){
        console.log('mon datata',this.con_registe.value);
        
       }
 }


}
