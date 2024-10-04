import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { userInfo } from 'os';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit{
  UserId:any
  data:any
  ngOnInit(){
   this.UserId= this.route.snapshot.paramMap.get("id")
   this.recup(this.UserId)
  }
  constructor(private api:AuthService,private router:Router, private route:ActivatedRoute){}
  datas :any
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

  recup(id:any){
    let body={
      user_id:id
    }
    this.api.GetSingleUser(body).subscribe({
      next:(response:any)=>{
        console.log("ma reponse de recupreation indi",response.user)
        this.data=response.user;
        this.loadUserData()

      },
      
    })
  }


  loadUserData() {
    this.register_form.patchValue({
       
        firstname: this.data.firstname,
        lastname: this.data.lastname,
        contact: this.data.contact,
        // Ne préremplissez pas le mot de passe pour des raisons de sécurité
        years: this.data.years,
        month: this.data.month,
        day: this.data.day,
        genre: this.data.genre
    });
  }


  update(id:any){
    if (this.register_form.valid) {
      let body={
        user_id:id
      }
      let data = this.register_form.value
      console.log('Données envoyées:', data); 
      this.api.update(body,data).subscribe({
        next:(response:any)=> {
          console.log('ma reponse de modif',response)
        },
        error(err:any) {
          console.log("mon erreur hoo",err)
        },
        complete() {},
      })
      
    }
  }
}
