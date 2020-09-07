package com.anonymous.spring.system.service.impl;

import com.anonymous.spring.system.model.entity.LoginHistory;
import com.anonymous.spring.system.repository.LoginHistoryRepository;
import com.anonymous.spring.system.repository.UserRepository;
import com.anonymous.spring.system.service.LoginHistoryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Collection;

@Service
public class LoginHistoryServiceImpl implements LoginHistoryService {

    private final Logger logger = LoggerFactory.getLogger(LoginHistoryServiceImpl.class);

    private final UserRepository userRepository;

    private final LoginHistoryRepository loginHistoryRepository;

    public LoginHistoryServiceImpl(LoginHistoryRepository loginHistoryRepository, UserRepository userRepository) {
        this.loginHistoryRepository = loginHistoryRepository;
        this.userRepository = userRepository;
    }

    @Override
    @Transactional
    public void saveLog(UserDetails userDetails, String ipAddress) {
        try {

            logger.info(String.format("Login username : %s", userDetails.getUsername()));
            logger.info(String.format("Login from address : %s", ipAddress));

            LoginHistory loginHistory = new LoginHistory();
            loginHistory.setIpAddress(ipAddress);
            loginHistory.setLoginDateTime(LocalDateTime.now());
            loginHistory.setLoginUser(this.userRepository.findByUsername(userDetails.getUsername()).orElseThrow(() -> new Exception("Login success but not found user in database for write log.")));

            this.loginHistoryRepository.save(loginHistory);

        } catch (Exception ex) {
            throw new RuntimeException(ex.getMessage());
        }
    }

    @Override
    public Collection<LoginHistory> getAllHistory() {
        return this.loginHistoryRepository.findAll();
    }

    @Override
    public Collection<LoginHistory> getAllHistoryByUsername(String username) {
        return null;
    }
}