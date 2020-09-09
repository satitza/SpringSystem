package com.anonymous.spring.system.service;

import com.anonymous.spring.system.model.entity.Role;

import java.util.Collection;

public interface RoleService {

    Collection<Role> getAllRole();

    Role save(Role role);

    void delete(Long id);
}
