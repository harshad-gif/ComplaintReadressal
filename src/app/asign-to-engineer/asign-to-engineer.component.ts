import { Component, OnInit } from '@angular/core';
import { ComplaintService } from '../services/complaint.service';

@Component({
  selector: 'app-asign-to-engineer',
  templateUrl: './asign-to-engineer.component.html',
  styleUrls: ['./asign-to-engineer.component.css']
})
export class AsignToEngineerComponent implements OnInit {

constructor(
  private compSer:ComplaintService
){}

ngOnInit(): void {
    
}

asign(complaintId:any){
  this.compSer.asign(complaintId).subscribe(
    (res)=>{
      console.log(res)
      
    },
    (error)=>{
      console.log(error)
    }
  )
}

}
