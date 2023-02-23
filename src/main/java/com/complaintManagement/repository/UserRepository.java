package com.complaintManagement.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.complaintManagement.entity.User;



@Repository
public interface UserRepository extends CrudRepository<User, String> {

}
