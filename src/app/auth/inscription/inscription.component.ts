import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule,Validators ,FormArray} from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule,CommonModule],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent {
  depatement:any=["Select Department","First Year","Computer","Mechanical","Electronics","Instrumentation","Information Technology"]
  interested:any=["Joint event manager","Sports secretary","Discpline Committee"]
  metier:any=['Event manager', 'Joint event manager', 'Sports secretary', 'Discipline Committee']
  year:any=[1,2,3,4,5,6]
  data:FormGroup
  selectedMetiers: any = [];

  
  constructor(private fb:FormBuilder){
    
    
    this.data = this.fb.group({
      nom:(["",[Validators.required]]),
      address:(["",[Validators.required]]),
      gender: ([""]) ,
      dept: ([""]) ,
      file: [null] ,
      
    })
  }
    selectFule(event:any){
      const files =  event.target.files[0]
      this.data.patchValue({
        file:files
      })
    }
     validation(){
      
      if (this.data.valid) {
        console.log(this.data.value)

        
      }
    }
}
