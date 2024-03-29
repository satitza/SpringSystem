package com.anonymous.spring.system.repository;

import com.anonymous.spring.system.model.entity.LoginHistory;
import com.anonymous.spring.system.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDateTime;
import java.util.Collection;

public interface LoginHistoryRepository extends JpaRepository<LoginHistory, Long> {

    Collection<LoginHistory> findAllByLoginUser(User user);

    Collection<LoginHistory> findAllByLoginUserAndIpAddressAndLogoutDateTime(User user, String ipAddress, LocalDateTime date);

    LoginHistory findTopByLoginUserAndIpAddressAndLogoutDateTimeOrderByIdDesc(User user, String ipAddress, LocalDateTime date);

    @Query("select count(login.id) from LoginHistory login")
    Integer sumLoginHistory();
}
