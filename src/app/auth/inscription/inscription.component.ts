import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule,Validators } from '@angular/forms';
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
  year:any=[1,2,3,4,5,6]
  data:FormGroup

  constructor(private fb:FormBuilder){
    this.data = this.fb.group({
      nom:["",Validators.required],
      address:["",Validators.required],
      

    })
  }
}
