package com.anonymous.spring.system.http.controller.admin;

import com.anonymous.spring.system.model.entity.Authority;
import com.anonymous.spring.system.service.AuthorityService;
import com.anonymous.spring.system.service.impl.AuthorityServiceImpl;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/api/authority")
public class AuthorityController {

    private final AuthorityService authorityService;

    public AuthorityController(AuthorityServiceImpl authorityService) {
        this.authorityService = authorityService;
    }

    @GetMapping
    public Collection<Authority> getAllAuthority() {
        return this.authorityService.getAllAuthority();
    }

    @PostMapping
    public Authority saveAuthority(@Validated Authority authority) {
        return this.authorityService.save(authority);
    }

    @GetMapping("/delete/{id}")
    public void deleteAuthority(@PathVariable Long id) {
        this.authorityService.delete(id);
    }
}
