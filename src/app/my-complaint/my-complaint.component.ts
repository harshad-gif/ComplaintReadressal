import { Component, OnInit } from '@angular/core';
import { MyComplaint } from '../model/myComplaint.model';
import { ComplaintService } from '../services/complaint.service';

@Component({
  selector: 'app-my-complaint',
  templateUrl: './my-complaint.component.html',
  styleUrls: ['./my-complaint.component.css']
})
export class MyComplaintComponent implements OnInit {

  complaintDetails:any=null
  count=1

  constructor(private compSer:ComplaintService){}

  ngOnInit(): void {
   this.getMyComplaint()   
  }

  getMyComplaint(){
    this.compSer.getMyComplaint().subscribe(
      (res)=>{
        console.log(res);
        this.complaintDetails = res
        
      },
      (error)=>{
        console.log(error)
      }
    )
  }
}
