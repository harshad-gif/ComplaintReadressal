package com.complaintManagement.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.complaintManagement.entity.Role;
import com.complaintManagement.repository.RoleRepository;




@Service
public class RoleService {

    @Autowired
    private RoleRepository roleRepo;

    public Role createNewRole(Role role) {
        return roleRepo.save(role);
    }
}