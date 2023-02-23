package com.complaintManagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.complaintManagement.entity.Complaint;
import com.complaintManagement.service.ComplaintService;



@RestController
public class ComplaintController {

	@Autowired
	private ComplaintService compSer;
	
	@PostMapping({"/sendComplaint"})
	public Complaint sendComplaint(@RequestBody Complaint complaint) {
		return compSer.sendComplaint(complaint);
	}
	
	@GetMapping({"/getComplaint"})
	public List<Complaint> getComplaint() {
		return compSer.getAllComplaint();
	}
	
	@GetMapping({"/getComplaintId/{complaintId}"})
	public Complaint getComplaintById(@PathVariable("complaintId")long complaintId) {
		return compSer.getComplaintById(complaintId);
	}
	
	@GetMapping({"/getMyComplaint"})
	public List<Complaint> getMyComplaint(){
		return compSer.getMyComplaint();
	}
	
	@GetMapping({"/markComplaintAsClosed/{complaintId}"})
	public void closedComplaint(@PathVariable(name="complaintId")long complaintId) {
		compSer.markComplaintClosed(complaintId);
	}
	
}

