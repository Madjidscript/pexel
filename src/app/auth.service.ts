import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  CreatUser(data:any){
    return this.http.post('http://127.0.0.1:5000/api/users/createuser',data)
  }
  LoginUser(data:any){
    return this.http.post('http://127.0.0.1:5000/api/users/loginusers',data)
  }
  GetUser(){
    return this.http.get("http://127.0.0.1:5000/api/users/getAllusers")
  }
  GetSingleUser(id:any){
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': '' 
      })
  };
    return this.http.post("http://127.0.0.1:5000/api/users/getsingleuser",id,httpOptions)
  }
  DeletUser(body: any) {
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': '' 
        })
    };
    return this.http.post("http://127.0.0.1:5000/api/users/deleteuser", body, httpOptions);
  }

  update(id:any,data:any){
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': '' 
      })
  };
    return this.http.post('http://127.0.0.1:5000/api/users/updateuser',id,data,)
  }
  
  
}
