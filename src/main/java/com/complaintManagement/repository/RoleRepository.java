package com.complaintManagement.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.complaintManagement.entity.Role;


@Repository
public interface RoleRepository extends CrudRepository<Role, String> {

}
