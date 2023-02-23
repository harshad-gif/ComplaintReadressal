import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComplaintService } from '../services/complaint.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent  implements OnInit{

  complaintDetails:any=null

  constructor(
  private compSer:ComplaintService,
  private router:Router
  ){}

  ngOnInit(): void {
   this.getAllComplaint()   
  }

  getAllComplaint(){
    this.compSer.getComplaint().subscribe(
      (res)=>{
        console.log(res)
        this.complaintDetails  = res
      },
      (error)=>{
        console.log(error)
      }
    )
  }

  asignToEngineer(complaintId:any){
    this.compSer.asign(complaintId).subscribe(
      (res)=>{
        console.log(res)
        alert("Complaint Asign To Engineer")
      },
      (error)=>{
        console.log(error)
      }
    )
  }
}
