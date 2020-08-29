package com.anonymous.spring.system.repository;

import com.anonymous.spring.system.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
