package com.anonymous.spring.system.repository;

import com.anonymous.spring.system.model.entity.LoginHistory;
import com.anonymous.spring.system.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.scheduling.annotation.Async;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.concurrent.Future;

public interface LoginHistoryRepository extends JpaRepository<LoginHistory, Long> {

    Collection<LoginHistory> findAllByLoginUser(User user);

    Collection<LoginHistory> findAllByLoginUserAndIpAddressAndLogoutDateTime(User user, String ipAddress, LocalDateTime date);

    /*@Async("asyncExecutor")*/
    LoginHistory findTopByLoginUserAndIpAddressAndLogoutDateTimeOrderByIdDesc(User user, String ipAddress, LocalDateTime date);
    
}
