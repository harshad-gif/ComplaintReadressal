package com.complaintManagement.controller;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.complaintManagement.entity.User;
import com.complaintManagement.service.UserService;


@RestController
public class UserController {

	@Autowired
    private UserService userService;

    @PostConstruct
    public void initRoleAndUser() {
        userService.initRoleAndUser();
    }

    @PostMapping({"/registerNewUser"})
    public User registerNewUser(@RequestBody User user) {
        return userService.registerNewUser(user);
    }

    @GetMapping({"/forAdmin"})
    @PreAuthorize("hasRole('Admin')")
    public String forAdmin(){
        return "This URL is only accessible to the admin";
    }

    @GetMapping({"/forUser"})
    @PreAuthorize("hasRole('User')")
    public String forUser(){
        return "This URL is only accessible to the user";
    }
    
    @GetMapping({"/forEngineer"})
    @PreAuthorize("hasRole('Engineer')")
    public String forEngineer(){
        return "This URL is only accessible to the engineer";
    }
    
    @GetMapping({"/forManager"})
    @PreAuthorize("hasRole('Manager')")
    public String forManager() {
    	return "This url is onl Accessible to the Manageer";
    }
    
    @GetMapping({"/getUserByUserName/{userId}"})
    public User getUser(@PathVariable("userId") String userId) {
    	return userService.getUserById(userId);
    }
    
    @GetMapping({"getAllUser"})
    public List<User> getAllUser(){
    	return userService.getAllUser();
    }
}
