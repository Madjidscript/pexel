import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-utilisateur',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './utilisateur.component.html',
  styleUrl: './utilisateur.component.css'
})
export class UtilisateurComponent implements OnInit {
  data:any
  ngOnInit() {
   this.recup()
  }
  constructor(private api:AuthService,private route:Router){}

  recup(){
    this.api.GetUser().subscribe({
      next:(response:any)=> {
        this.data= response.users
        console.log("mon data",this.data)
      },
      error(err:any) {
        console.log("mon ereur",err)
      },
      complete() {},
    })
  }

  delete(id:any){
    let body = {
      user_id:id
    }
    this.api.DeletUser(body).subscribe({
      next:(response:any)=> {
       console.log("ma reponse",response)
       this.recup();
      },
      error(err:any) {
        console.log("mon errerur",err)
      },
      complete() {},
    })

  }

  edit(id:any){
     this.route.navigate(["/accueil/update",id])
  }

}
