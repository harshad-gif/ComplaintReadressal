import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private userSer:UserService,
    private userAuth:AuthService,
    private router: Router
  ){}

  ngOnInit(): void {
      
 
  }

  login(loginForm:NgForm){
    this.userSer.login(loginForm.value)
    .subscribe(
      (res:any)=>{
        this.userAuth.setRoles(res.user.role);
        this.userAuth.setToken(res.jwtToken);

        const role = res.user.role[0].roleName;
        if (role === "Admin") {
          this.router.navigate(['/admin']);
          alert("Admin Login Successfully")
        } else if(role === "User"){
          this.router.navigate(['/user']);
          alert("Login  User Successfully")
        } else if(role === "Manager"){
          this.router.navigate(['manager'])
          alert("Login  Manager Successfully")

        }else{
          this.router.navigate(['engineer'])
          alert("Login  Engineer Successfully")
        }
       
        console.log(res)
      },
      (error)=>{
        console.log(error)
      }
    )
  }
}
