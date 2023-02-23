package com.complaintManagement.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.complaintManagement.entity.Complaint;
import com.complaintManagement.entity.User;

public interface ComplaintRepository extends JpaRepository<Complaint, Long> {

	public List<Complaint> findByUser(User user);
}
