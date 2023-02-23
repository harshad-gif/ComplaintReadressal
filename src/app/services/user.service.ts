import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Complaint } from '../model/complaint.model';
import { User } from '../model/user.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 
  PATH_OF_API = "http://localhost:8080"

  requestHeader = new HttpHeaders(
    {"No-Auth":"True"}
  )

  constructor(
    private http:HttpClient,
    private userAuth:AuthService
  ) { }

  public register(registerData:any){
    return this.http.post(this.PATH_OF_API+'/registerNewUser',registerData)
  }

  public login(loginData: any){
    return this.http.post(this.PATH_OF_API+"/authenticate", loginData,{headers:this.requestHeader})
  }

  public forUser() {
    return this.http.get(this.PATH_OF_API + '/forUser', {
      responseType: 'text',
    });
  }


  public forAdmin() {
    return this.http.get(this.PATH_OF_API + '/forAdmin', {
      responseType: 'text',
    });
  }

  public forEngineer() {
    return this.http.get(this.PATH_OF_API + '/forEngineer', {
      responseType: 'text',
    });
  }

  public forManager() {
    return this.http.get(this.PATH_OF_API + '/forManager', {
      responseType: 'text',
    });
  }

  public sendComplaint(complaint:any){
    return this.http.post<Complaint>(this.PATH_OF_API + '/sendComplaint',complaint)
  }

  public getAllUser(){
    return this.http.get("http://localhost:8080/getAllUser")
  }

 



  public roleMatch(allowedRoles:any): boolean|any {
    let isMatch = false;
    const userRoles: any = this.userAuth.getRoles();

    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          } else {
            return isMatch;
          }
        }
      }
    }
  }
}
