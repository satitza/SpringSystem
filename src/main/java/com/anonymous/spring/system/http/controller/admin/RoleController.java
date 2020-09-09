package com.anonymous.spring.system.http.controller.admin;

import com.anonymous.spring.system.model.entity.Role;
import com.anonymous.spring.system.service.RoleService;
import com.anonymous.spring.system.service.impl.RoleServiceImpl;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/api/role")
public class RoleController {

    private final RoleService roleService;

    public RoleController(RoleServiceImpl roleService) {
        this.roleService = roleService;
    }

    @GetMapping
    public Collection<Role> getAllRole() {
        return this.roleService.getAllRole();
    }

    @PostMapping
    public Role save(@Validated Role role) {
        return this.roleService.save(role);
    }

    @GetMapping("/delete/{id}")
    public void deleteRole(@PathVariable Long id) {
        this.roleService.delete(id);
    }
}
