import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
constructor(
  private userAuth:AuthService,
  public userSer:UserService,
  private router:Router
){}

public isLoggedIn(){
  return this.userAuth.isLoggedIn()
}

public logout(){
  this.userAuth.clear()
  this.router.navigate(['/login'])
}
}
