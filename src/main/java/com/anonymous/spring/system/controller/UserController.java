package com.anonymous.spring.system.controller;

import com.anonymous.spring.system.model.entity.Authority;
import com.anonymous.spring.system.model.entity.User;
import com.anonymous.spring.system.repository.AuthorityRepository;
import com.anonymous.spring.system.repository.RoleRepository;
import com.anonymous.spring.system.service.UserService;
import com.anonymous.spring.system.service.impl.UserServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collection;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    private final UserService userService;

    // private final RoleRepository roleRepository;

    // private final AuthorityRepository authorityRepository;

    public UserController(UserServiceImpl userService/*, RoleRepository roleRepository, AuthorityRepository authorityRepository*/) {
        this.userService = userService;
        // this.roleRepository = roleRepository;
        // this.authorityRepository = authorityRepository;
    }

    @GetMapping
    public ResponseEntity<Collection<User>> getAllUsers() {
        return ResponseEntity.status(HttpStatus.OK).body(this.userService.getAllUsers());
    }

    @GetMapping("/current")
    public ResponseEntity<Object> getCurrentUser(Authentication authentication) {
        if (authentication.isAuthenticated()) {
            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
            return ResponseEntity.status(HttpStatus.OK).body(userDetails);
        } else {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("You are not authenticated.");
        }
    }

    @PostMapping
    public ResponseEntity<User> saveUser(@Validated User user) {
        return ResponseEntity.status(HttpStatus.OK).body(this.userService.saveUser(user));
    }

    @PostMapping("/delete/{id}")
    public void deleteUser(@PathVariable Long id) {
        logger.warn("Delete user id : " + id);
        this.userService.deleteUser(id);
    }

    /*@GetMapping("/create")
    private ResponseEntity createUser() {

        User user = new User();
        user.setFirstName("Anonymous");
        user.setLastName("Hacker");
        user.setEmail("st_satitza@hotmail.com");
        user.setActivated(true);
        user.setUsername("anonymous");
        user.setPassword("dr823c1HEE");
        user.setRoles(this.roleRepository.findAll());
        Collection<Authority> authorities = new ArrayList<>();
        authorities.add(this.authorityRepository.findById((long) 2).get());
        user.setAuthorities(authorities);

        this.userService.saveUser(user);
        return ResponseEntity.status(HttpStatus.OK).body("Create user success.");
    }*/

}
