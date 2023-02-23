package com.complaintManagement.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.complaintManagement.entity.Complaint;
import com.complaintManagement.entity.Engineer;
import com.complaintManagement.entity.User;

@Repository
public interface EngineerRepository extends JpaRepository<Engineer, Long> {


	public List<Engineer> findByUser(User user);

}
