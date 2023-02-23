import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable,of } from 'rxjs';
import { Complaint } from '../model/complaint.model';
import { ComplaintService } from './complaint.service';

@Injectable({
  providedIn: 'root'
})
export class ComplaintResolverService implements Resolve<Complaint> {

  constructor(
    private compSer:ComplaintService
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<Complaint> {
   const id  = route.paramMap.get("complaintId")

   if(id){

    return this.compSer.getComplaintById(id)

   }else{
       return of(this.getComplaintDetails())
   }
  }

  getComplaintDetails(){
    return{
      complaintId:'',
	   complaintSubject:'',
	    complaintDetail:'',
      complaintCategory:'',
      complaintStatus:''
    }
  }
}
