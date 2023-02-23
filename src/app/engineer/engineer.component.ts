import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Complaint } from '../model/complaint.model';
import { ComplaintService } from '../services/complaint.service';

@Component({
  selector: 'app-engineer',
  templateUrl: './engineer.component.html',
  styleUrls: ['./engineer.component.css']
})

export class EngineerComponent  implements OnInit{

  aisgnComplaint:any=null


  complaint:Complaint={
    complaintId:"",
    complaintSubject:"",
    complaintDetail:'',
    complaintCategory:'',
    complaintStatus:''
   

  }

  constructor(
    private actRoute:ActivatedRoute,
    private compSer:ComplaintService
  ){}

  ngOnInit(): void {
      this.complaint = this.actRoute.snapshot.data['complaint']

      this.getMyComplaint()
  }



  getMyComplaint(){
    this.compSer.getEngineerComplaint().subscribe(
      (res)=>{
        console.log(res);
        this.aisgnComplaint = res
        
      },
      (error)=>{
        console.log(error)
      }
    )
  }

  updateComplaint(complaintId:any){
    this.compSer.closedComplaint(complaintId).subscribe(
      (res)=>{
        console.log(res)
        this.getMyComplaint()
      },
      (error)=>{
        console.log(error)
      }
    )
  }
}
