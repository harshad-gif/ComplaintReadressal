import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Complaint } from '../model/complaint.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-send-complaint',
  templateUrl: './send-complaint.component.html',
  styleUrls: ['./send-complaint.component.css']
})
export class SendComplaintComponent implements OnInit {

  compDetails:Complaint={
   
    complaintId:'',
	  complaintSubject:'',
	  complaintDetail:'',
    complaintCategory:"",
    complaintStatus:''
  
  }

  constructor(private userSer:UserService){}
  ngOnInit(): void {
      
  }

  sendComplaint(compForm:NgForm){
    this.userSer.sendComplaint(this.compDetails).subscribe(
      (res:Complaint)=>{
        console.log(res)
        compForm.reset()
        alert("Complaint Send SuccessFully")
      },
      (error)=>{
        console.log(error)
      }
    )
  }
}
