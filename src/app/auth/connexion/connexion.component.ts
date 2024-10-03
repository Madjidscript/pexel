import { Component, OnInit } from '@angular/core';
import { HearderComponent } from '../../hearder/hearder.component';
import { Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,CommonModule],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent implements OnInit{
  data:any
  constructor(private api:AuthService,private route:Router){}
  ngOnInit(): void {
   
  }
  con_registe:FormGroup= new FormGroup({
    contact:new FormControl(null,Validators.required),
    password:new FormControl(null,Validators.required)
  })
 
//  validation(event:Event){
//        event.preventDefault()
//        if(this.con_registe.valid){
//         console.log('mon datata',this.con_registe.value);

//         this.api.LoginUser(this.con_registe.value).subscribe({
//           next:(reponse:any)=>{
//             this.data= reponse
//             console.log("ma reponse est",response)
//             if (reponse.status=="success") {
//               this.route.navigate(["accueil"])
//             }
//           },
//           error(err) {
//             console.log("mon erreur",err)
//           },
//           complete() {},
//         })
        
//        }
//  }

login(){
  let body= this.con_registe.value
  this.api.LoginUser(body).subscribe({
              next:(reponse:any)=>{
                this.data= reponse
                console.log("ma reponse est",reponse)
                if (reponse.status=="success") {
                  sessionStorage.setItem('user', JSON.stringify(this.data));
                  this.route.navigate(["/accueil"])
                }
              },
              error(err) {
                console.log("mon erreur",err)
              },
              complete() {},
            })
            
}

}
