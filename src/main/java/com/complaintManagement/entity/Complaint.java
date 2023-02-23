package com.complaintManagement.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Entity
public class Complaint {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long complaintId;
	
	private String complaintSubject;
	private String complaintDetail;
	@ManyToOne
	private User user;
	
	private String complaintStatus;
	
	
	
	
	
	public Complaint() {}
	
	
	public Complaint(String complaintSubject, String complaintDetail, User user, String complaintStatus) {
		super();
		this.complaintSubject = complaintSubject;
		this.complaintDetail = complaintDetail;
		this.user = user;
		this.complaintStatus = complaintStatus;
	}


	
	
	public String getComplaintStatus() {
		return complaintStatus;
	}


	public void setComplaintStatus(String complaintStatus) {
		this.complaintStatus = complaintStatus;
	}


	public long getComplaintId() {
		return complaintId;
	}
	public void setComplaintId(long complaintId) {
		this.complaintId = complaintId;
	}
	public String getComplaintSubject() {
		return complaintSubject;
	}
	public void setComplaintSubject(String complaintSubject) {
		this.complaintSubject = complaintSubject;
	}
	public String getComplaintDetail() {
		return complaintDetail;
	}
	public void setComplaintDetail(String complaintDetail) {
		this.complaintDetail = complaintDetail;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	
}
