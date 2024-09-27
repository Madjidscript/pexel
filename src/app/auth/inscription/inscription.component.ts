
import { Component, OnInit } from '@angular/core';
import { HearderComponent } from '../../hearder/hearder.component';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [HearderComponent,RouterModule,ReactiveFormsModule,],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent implements OnInit {
  
  register_form:FormGroup = new FormGroup({
    firstname:new FormControl(null,Validators.required),
    lastname:new FormControl(null,Validators.required),
    contact:new FormControl(null,Validators.required),
    password:new FormControl(null,Validators.required),
    years:new FormControl(null,Validators.required),
    month:new FormControl(null,Validators.required),
    day:new FormControl(null,Validators.required),
    genre:new FormControl(null,Validators.required),
  })
 
  ngOnInit(){
   
  }

  validation(event:Event){
     event.preventDefault()
     console.log("papapapapap")
     if (this.register_form.valid) {
      console.log("mon data",this.register_form.value)
      
     }
  }

  
    
    
   
  }
   

