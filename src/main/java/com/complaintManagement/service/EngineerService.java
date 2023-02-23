package com.complaintManagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.complaintManagement.config.JwtRequestFilter;
import com.complaintManagement.entity.Complaint;
import com.complaintManagement.entity.ComplaintInput;
import com.complaintManagement.entity.Engineer;
import com.complaintManagement.entity.Role;
import com.complaintManagement.entity.User;
import com.complaintManagement.repository.ComplaintRepository;
import com.complaintManagement.repository.EngineerRepository;
import com.complaintManagement.repository.RoleRepository;
import com.complaintManagement.repository.UserRepository;


@Service
public class EngineerService {

	@Autowired
	private EngineerRepository engRepo;
	
	 @Autowired
	 private RoleRepository roleDao;
	 
	 @Autowired
	 private UserRepository userRepo;
	 
	 @Autowired
	 private ComplaintRepository compRepo;
	
	public Engineer asignToEngineer(long complaintId) {
		Complaint complaint = compRepo.findById(complaintId).get(); 
		complaint.setComplaintStatus("Open");
		Role role = roleDao.findById("Engineer").get();
		User user =  userRepo.findById("Ajay@15").get();
		
		if(complaint!=null && role!=null && user!=null) {
			Engineer eng = new Engineer(
					role,
					complaint,
					user
					
					
					);
			return engRepo.save(eng);
		}
		return null;
		
	}
	
	public List<Engineer> getMyComplaint() {
		String currentUser = JwtRequestFilter.CURRENT_USER;
		User user = userRepo.findById(currentUser).get();
		return engRepo.findByUser(user);
	}
	
	public List<Engineer> getAllAsignComplaint(){
		return engRepo.findAll();
	}
	
}
