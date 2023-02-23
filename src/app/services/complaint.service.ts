import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Complaint } from '../model/complaint.model';
import { MyComplaint } from '../model/myComplaint.model';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  constructor(private http:HttpClient) { }

  public getComplaint():Observable<MyComplaint[]>{
    return this.http.get<MyComplaint[]>("http://localhost:8080/getComplaint")
  }

  public getComplaintById(complaintId:any){
    return this.http.get<Complaint>("http://localhost:8080/getComplaintId/"+complaintId)
  }

  public asign(complaintId:any){
    return this.http.get("http://localhost:8080/asignTo/"+complaintId)
  }

  public getMyComplaint(){
    return this.http.get("http://localhost:8080/getMyComplaint")
  }

  public getEngineerComplaint(){
    return this.http.get("http://localhost:8080/getEngineer")
  }

  public closedComplaint(complaintId:any){
    return this.http.get("http://localhost:8080/markComplaintAsClosed/"+complaintId)
  }

  public allAsignComplaint(){
    return this.http.get("http://localhost:8080/getAllAsignComplaint")
  }
}



