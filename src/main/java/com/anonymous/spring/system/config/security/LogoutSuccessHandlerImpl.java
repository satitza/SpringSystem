package com.anonymous.spring.system.config.security;

import com.anonymous.spring.system.service.LoginHistoryService;
import com.anonymous.spring.system.service.impl.LoginHistoryServiceImpl;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class LogoutSuccessHandlerImpl implements LogoutSuccessHandler {

    private final LoginHistoryService loginHistoryService;

    public LogoutSuccessHandlerImpl(LoginHistoryServiceImpl loginHistoryService) {
        this.loginHistoryService = loginHistoryService;
    }

    @Override
    public void onLogoutSuccess(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Authentication authentication) throws IOException {

        try {
            this.loginHistoryService.saveLogLogout((UserDetails) authentication.getPrincipal(), LoginHistoryServiceImpl.getClientIp(httpServletRequest));
        } catch (RuntimeException ex) {
            System.out.println(ex.getMessage());
        }

        httpServletResponse.setStatus(HttpServletResponse.SC_OK);
        httpServletResponse.getWriter().write("{ \"success\": \"Logout success.\" }");
        httpServletResponse.setContentType("application/json");
    }
}
