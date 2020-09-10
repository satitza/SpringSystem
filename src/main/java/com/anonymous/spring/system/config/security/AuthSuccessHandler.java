package com.anonymous.spring.system.config.security;

import com.anonymous.spring.system.model.enums.NotifyTypeEnum;
import com.anonymous.spring.system.service.LogHistoryService;
import com.anonymous.spring.system.service.NotifyService;
import com.anonymous.spring.system.service.impl.LogHistoryServiceImpl;
import com.anonymous.spring.system.service.impl.NotifyServiceImpl;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class AuthSuccessHandler implements AuthenticationSuccessHandler {

    private final LogHistoryService logHistoryService;

    private final NotifyService notifyService;

    public AuthSuccessHandler(LogHistoryServiceImpl loginHistoryService, NotifyServiceImpl notifyService) {
        this.logHistoryService = loginHistoryService;
        this.notifyService = notifyService;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Authentication authentication) throws IOException {

        try {
            this.logHistoryService.saveLogLogin((UserDetails) authentication.getPrincipal(), LogHistoryServiceImpl.getClientIp(httpServletRequest));
            this.notifyService.updateNotifyInformation(NotifyTypeEnum.LOGIN);
        } catch (RuntimeException ex) {
            System.out.println(ex.getMessage());
        }

        httpServletResponse.setStatus(HttpServletResponse.SC_OK);
        httpServletResponse.getWriter().write("{ \"success\": \"You are authenticated.\" }");
        httpServletResponse.setContentType("application/json");
    }
}
