package com.complaintManagement.service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.complaintManagement.entity.Complaint;
import com.complaintManagement.entity.Role;
import com.complaintManagement.entity.User;
import com.complaintManagement.repository.RoleRepository;
import com.complaintManagement.repository.UserRepository;

@Service
public class UserService {
	
	   @Autowired
	    private UserRepository userDao;

	    @Autowired
	    private RoleRepository roleDao;

	    @Autowired
	    private PasswordEncoder passwordEncoder;

	 public void initRoleAndUser() {

	        Role adminRole = new Role();
	        adminRole.setRoleName("Admin");
	        adminRole.setRoleDescription("Admin role");
	        roleDao.save(adminRole);

	        Role userRole = new Role();
	        userRole.setRoleName("User");
	        userRole.setRoleDescription("Default role for newly created record");
	        roleDao.save(userRole);

	        User adminUser = new User();
	        adminUser.setUserName("admin123");
	        adminUser.setUserPassword(getEncodedPassword("admin@pass"));
	        adminUser.setUserFirstName("admin");
	        adminUser.setUserLastName("admin");
	        Set<Role> adminRoles = new HashSet<>();
	        adminRoles.add(adminRole);
	        adminUser.setRole(adminRoles);
	        userDao.save(adminUser);

//	        User user = new User();
//	        user.setUserName("raj123");
//	        user.setUserPassword(getEncodedPassword("raj@123"));
//	        user.setUserFirstName("raj");
//	        user.setUserLastName("sharma");
//	        Set<Role> userRoles = new HashSet<>();
//	        userRoles.add(userRole);
//	        user.setRole(userRoles);
//	        userDao.save(user);
	    }

	    public User registerNewUser(User user) {
	        Role role = roleDao.findById("User").get();
	        Set<Role> userRoles = new HashSet<>();
	        userRoles.add(role);
	        user.setRole(userRoles);
	        user.setUserPassword(getEncodedPassword(user.getUserPassword()));

	        return userDao.save(user);
	    }
	    
	    public User getUserById(String userId) {
	    	return userDao.findById(userId).get();
	    }

	    public String getEncodedPassword(String password) {
	        return passwordEncoder.encode(password);
	    }
	    
	    public List<User> getAllUser() {
			return (List<User>) userDao.findAll();
		}
		
}
