package com.anonymous.spring.system.repository;

import com.anonymous.spring.system.model.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
}
