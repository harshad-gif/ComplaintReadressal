package com.complaintManagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.complaintManagement.config.JwtRequestFilter;
import com.complaintManagement.entity.Complaint;
import com.complaintManagement.entity.User;
import com.complaintManagement.repository.ComplaintRepository;
import com.complaintManagement.repository.UserRepository;


@Service
public class ComplaintService {
	
	private static final String COMPLAINT_SEND = "Pending";

	@Autowired
    private ComplaintRepository compRepo;
	
	@Autowired
	private UserRepository userRepo;
	
	public Complaint sendComplaint(Complaint complaint) {
		String currentUser = JwtRequestFilter.CURRENT_USER;
		User user = userRepo.findById(currentUser).get();
		Complaint comp = new Complaint(
				complaint.getComplaintSubject(),
				complaint.getComplaintDetail(),
				user,
				COMPLAINT_SEND
		);
		return compRepo.save(comp);
	}
	
	public List<Complaint> getAllComplaint() {
		return compRepo.findAll();
	}
	
	public Complaint getComplaintById(long complaintId) {
		return compRepo.findById(complaintId).get();
	}
	
	public List<Complaint> getMyComplaint() {
		String currentUser = JwtRequestFilter.CURRENT_USER;
		User user = userRepo.findById(currentUser).get();
		return compRepo.findByUser(user);
	}
	
	public void markComplaintClosed(long complaintId) {
		Complaint cmp = compRepo.findById(complaintId).get();
		if(cmp != null) {
			cmp.setComplaintStatus("Closed");
			compRepo.save(cmp);
		}
	}
}
