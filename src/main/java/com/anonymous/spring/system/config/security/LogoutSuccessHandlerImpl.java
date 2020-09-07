package com.anonymous.spring.system.config.security;

import com.anonymous.spring.system.service.LogHistoryService;
import com.anonymous.spring.system.service.impl.LogHistoryServiceImpl;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class LogoutSuccessHandlerImpl implements LogoutSuccessHandler {

    private final LogHistoryService logHistoryService;

    public LogoutSuccessHandlerImpl(LogHistoryServiceImpl loginHistoryService) {
        this.logHistoryService = loginHistoryService;
    }

    @Override
    public void onLogoutSuccess(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Authentication authentication) throws IOException {

        try {
            this.logHistoryService.saveLogLogout((UserDetails) authentication.getPrincipal(), LogHistoryServiceImpl.getClientIp(httpServletRequest));
        } catch (RuntimeException ex) {
            System.out.println(ex.getMessage());
        }

        httpServletResponse.setStatus(HttpServletResponse.SC_OK);
        httpServletResponse.getWriter().write("{ \"success\": \"Logout success.\" }");
        httpServletResponse.setContentType("application/json");
    }
}
