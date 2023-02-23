import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {

  aisgnComplaint:any=null

  constructor(
  private userSer:UserService

  ){}

  ngOnInit(): void {
  
    this.getAllUser()
  }

  getAllUser(){
    this.userSer.getAllUser().subscribe(
      (res)=>{
        this.aisgnComplaint = res
        console.log(res)
      },
      (error)=>{
        console.log(error)
      }
    )
  }
}
