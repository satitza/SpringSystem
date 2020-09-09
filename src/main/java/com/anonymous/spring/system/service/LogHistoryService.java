package com.anonymous.spring.system.service;

import com.anonymous.spring.system.model.entity.LoginHistory;
import com.anonymous.spring.system.model.entity.RequestHistory;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.concurrent.CompletableFuture;

public interface LogHistoryService {

    void saveLogLogin(UserDetails userDetails, String ipAddress);

    void saveLogLogout(UserDetails userDetails, String ipAddress);

    Collection<LoginHistory> getAllLoginHistory();

    Collection<LoginHistory> getAllLoginHistoryByUsername(String username);

    void addHttpRequestLog(RequestHistory requestHistory, String username, String ipAddress) throws Exception;
}
