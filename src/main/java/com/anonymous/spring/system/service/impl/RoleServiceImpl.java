package com.anonymous.spring.system.service.impl;

import com.anonymous.spring.system.model.entity.Role;
import com.anonymous.spring.system.repository.RoleRepository;
import com.anonymous.spring.system.service.RoleService;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class RoleServiceImpl implements RoleService {

    private final RoleRepository roleRepository;

    public RoleServiceImpl(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    @Override
    public Collection<Role> getAllRole() {
        return this.roleRepository.findAll();
    }

    @Override
    public Role save(Role role) {
        return this.roleRepository.save(role);
    }

    @Override
    public void delete(Long id) {
        this.roleRepository.deleteById(id);
    }
}
