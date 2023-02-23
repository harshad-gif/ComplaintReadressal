package com.complaintManagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.complaintManagement.entity.Complaint;
import com.complaintManagement.entity.Engineer;
import com.complaintManagement.service.EngineerService;

@RestController
public class EngineerController {

	@Autowired
	private EngineerService engSer;
	
	
	@GetMapping({"/asignTo/{complaintId}"})
	public Engineer asign(@PathVariable(name="complaintId")long complaintId) {
		return engSer.asignToEngineer(complaintId);
	}
	
	@GetMapping({"/getEngineer"})
	public List<Engineer> getMyComplaint(){
		return engSer.getMyComplaint();
	}
	
	@GetMapping({"getAllAsignComplaint"})
	public List<Engineer> getAllAsignComplaint(){
		return engSer.getAllAsignComplaint();
	}
}
