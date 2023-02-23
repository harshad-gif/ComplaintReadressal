import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 
  user!:User

  constructor(
    private actRoute:ActivatedRoute,
    private router:Router,
    private userSer:UserService
  ){}

  ngOnInit(): void {
    this.user = this.actRoute.snapshot.data['user']
    console.log(this.user)
  }

  register(userId:string){
    this.router.navigate(['/send',{userId:userId}])
  }
}
