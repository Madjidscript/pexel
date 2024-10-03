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
}
