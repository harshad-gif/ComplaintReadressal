import { Component, OnInit } from '@angular/core';
import { ComplaintService } from '../services/complaint.service';

@Component({
  selector: 'app-aisgn-all-complaint',
  templateUrl: './aisgn-all-complaint.component.html',
  styleUrls: ['./aisgn-all-complaint.component.css']
})
export class AisgnAllComplaintComponent implements OnInit {

  aisgnComplaint:any=null

  constructor(
      private compSer:ComplaintService
  ){}

  ngOnInit(): void {
      this.getAllAsignComplaint()
  }
  getAllAsignComplaint(){
    this.compSer.allAsignComplaint().subscribe(
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
