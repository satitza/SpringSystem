package com.anonymous.spring.system.repository;

import com.anonymous.spring.system.model.entity.LoginHistory;
import com.anonymous.spring.system.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface LoginHistoryRepository extends JpaRepository<LoginHistory, Long> {

    Collection<LoginHistory> findAllByLoginUser(User user);
}
