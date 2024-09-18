import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule,Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {
data:FormGroup

constructor( private fb:FormBuilder ,private router:Router){
  this.data= this.fb.group({
   email:["",[Validators.required,Validators.email]],
   password:["",[Validators.required,Validators.min(3)]]
  })
}

validation(){
  console.log("papapapap")
  console.log("mon dataaaaa",this.data.value)
  if(this.data.valid){
   
    console.log("mon dataaaaa",this.data.value)
    this.router.navigate(['/auth/inscription'])
  }
}



}
