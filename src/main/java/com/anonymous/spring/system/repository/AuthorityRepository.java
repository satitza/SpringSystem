package com.anonymous.spring.system.repository;

import com.anonymous.spring.system.model.entity.Authority;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthorityRepository extends JpaRepository<Authority, Long> {
}
