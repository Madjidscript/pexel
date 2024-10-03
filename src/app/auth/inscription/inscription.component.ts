
import { Component, OnInit } from '@angular/core';
import { HearderComponent } from '../../hearder/hearder.component';
import { AuthService } from '../../auth.service';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [HearderComponent,RouterModule,ReactiveFormsModule,],
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
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
  constructor(private api:AuthService,private route:Router){}
 
  ngOnInit(){
   
  }

  validation(event:Event){
     event.preventDefault()
     console.log("papapapapap")
     if (this.register_form.valid) {
      console.log("mon data",this.register_form.value)
      this.api.CreatUser(this.register_form.value).subscribe({
        next:(response:any)=>{ 
          this.datas= response
          console.log("ma reponse est,",this.datas)
          if (response.status=="Success") {
            this.route.navigate(["/auth/connexion"])
          }
          
        },
        error(err:any) {
          console.log("mon erreur",err)
        },
        complete() {
        },
       
      })

      
     }
  }

  
    
    
   
  }
   

