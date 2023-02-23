package com.complaintManagement.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Engineer {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long Id;
	
	
	
	@ManyToOne
	private Role role;
	@ManyToOne
	private Complaint complaint;
	
	@ManyToOne
	private User user;
	
	
	
	public Engineer() {}
	
	
	public Engineer(Role role, Complaint complaint, User user) {
		super();
		
		this.role = role;
		this.complaint = complaint;
		this.user = user;
	}


	


	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}


	public long getId() {
		return Id;
	}
	public void setId(long id) {
		Id = id;
	}
	public Role getRole() {
		return role;
	}
	public void setRole(Role role) {
		this.role = role;
	}
	public Complaint getComplaint() {
		return complaint;
	}
	public void setComplaint(Complaint complaint) {
		this.complaint = complaint;
	}
	
	
	
	
}
