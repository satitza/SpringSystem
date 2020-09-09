package com.anonymous.spring.system.service.impl;

import com.anonymous.spring.system.model.entity.LoginHistory;
import com.anonymous.spring.system.model.entity.RequestHistory;
import com.anonymous.spring.system.repository.LoginHistoryRepository;
import com.anonymous.spring.system.repository.UserRepository;
import com.anonymous.spring.system.service.LogHistoryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Async;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.concurrent.Future;

@Service
public class LogHistoryServiceImpl implements LogHistoryService {

    private final Logger logger = LoggerFactory.getLogger(LogHistoryServiceImpl.class);

    private final UserRepository userRepository;

    private final LoginHistoryRepository loginHistoryRepository;


    public LogHistoryServiceImpl(LoginHistoryRepository loginHistoryRepository, UserRepository userRepository) {
        this.loginHistoryRepository = loginHistoryRepository;
        this.userRepository = userRepository;
    }

    @Override
    @Transactional
    public void saveLogLogin(UserDetails userDetails, String ipAddress) {
        try {

            logger.info(String.format("Login username : %s", userDetails.getUsername()));
            logger.info(String.format("Login from ip address : %s", ipAddress));
            logger.info(String.format("Login date time : %s", LocalDateTime.now()));

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
    @Transactional
    public void saveLogLogout(UserDetails userDetails, String ipAddress) {
        try {

            logger.info(String.format("Logout username : %s", userDetails.getUsername()));
            logger.info(String.format("Logout from ip address : %s", ipAddress));
            logger.info(String.format("Logout date time : %s", LocalDateTime.now()));

            Collection<LoginHistory> loginHistories = this.loginHistoryRepository.findAllByLoginUserAndIpAddressAndLogoutDateTime(this.userRepository.findByUsername(userDetails.getUsername()).orElseThrow(() -> new Exception("Not found user for update log logout.")), ipAddress, null);
            for (LoginHistory loginHistory : loginHistories) {
                loginHistory.setLogoutDateTime(LocalDateTime.now());
            }

            this.loginHistoryRepository.saveAll(loginHistories);

        } catch (Exception ex) {
            throw new RuntimeException(ex.getMessage());
        }
    }

    @Override
    public Collection<LoginHistory> getAllLoginHistory() {
        return this.loginHistoryRepository.findAll();
    }

    @Override
    public Collection<LoginHistory> getAllLoginHistoryByUsername(String username) {
        return null;
    }

    @Override
    @Async("asyncExecutor")
    public void addHttpRequestLog(RequestHistory requestHistory, String username, String ipAddress) {

        logger.info(String.format("Request from user : %s", username));
        logger.info(String.format("Request from ip address : %s", ipAddress));
        logger.info(String.format("Request method : %s", requestHistory.getRequestMethod()));
        logger.info(String.format("Request path : %s", requestHistory.getRequestPath()));
        logger.info(String.format("Request date time : %s", requestHistory.getRequestDateTime()));

        try {
            Future<LoginHistory> loginHistoryFuture = this.loginHistoryRepository.findTopByLoginUserAndIpAddressAndLogoutDateTimeOrderByIdDesc(this.userRepository.findByUsername(username).orElseThrow(() -> new Exception("Not found login history for stored request.")), ipAddress, null);
            LoginHistory loginHistory = loginHistoryFuture.get();
            Collection<RequestHistory> requestHistories = new ArrayList<>();
            requestHistories.add(requestHistory);
            loginHistory.setRequestHistories(requestHistories);
            this.loginHistoryRepository.save(loginHistory);
        } catch (Exception ex) {
            throw new RuntimeException("Error cannot stored http request log.");
        }

        logger.info("--------------------------------------------------------------------------------------------------------------");
    }

    public static String getClientIp(HttpServletRequest request) {
        String remoteAddr = "";
        if (request != null) {
            remoteAddr = request.getHeader("X-FORWARDED-FOR");
            if (remoteAddr == null || "".equals(remoteAddr)) {
                remoteAddr = request.getRemoteAddr();
            }
        }
        return remoteAddr;
    }
}
