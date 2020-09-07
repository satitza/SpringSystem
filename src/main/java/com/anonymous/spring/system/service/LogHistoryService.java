package com.anonymous.spring.system.service;

import com.anonymous.spring.system.model.entity.LoginHistory;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

public interface LogHistoryService {

    void saveLogLogin(UserDetails userDetails, String ipAddress);

    void saveLogLogout(UserDetails userDetails, String ipAddress);

    Collection<LoginHistory> getAllHistory();

    Collection<LoginHistory> getAllHistoryByUsername(String username);
}
