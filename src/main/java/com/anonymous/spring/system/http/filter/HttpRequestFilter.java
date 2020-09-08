package com.anonymous.spring.system.http.filter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class HttpRequestFilter implements Filter {

    private final Logger logger = LoggerFactory.getLogger(HttpRequestFilter.class);

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {

        HttpServletRequest req = (HttpServletRequest) servletRequest;
        HttpServletResponse res = (HttpServletResponse) servletResponse;

        if (req.getUserPrincipal() != null) {
            logger.info(String.format("Request from user : %s", req.getUserPrincipal().getName()));
            logger.info(String.format("Request session id : %s", req.getSession().getId()));
            logger.info(String.format("Request from ip address : %s", req.getRemoteAddr()));
            logger.info(String.format("Request method : %s", req.getMethod()));
            logger.info(String.format("Request path : %s", req.getRequestURI()));
            logger.info("--------------------------------------------------------------------------------------------------------------");
        }

        filterChain.doFilter(servletRequest, servletResponse);
    }

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
    }

    @Override
    public void destroy() {
    }
}
