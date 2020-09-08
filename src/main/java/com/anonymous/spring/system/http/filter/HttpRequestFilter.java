package com.anonymous.spring.system.http.filter;

import com.anonymous.spring.system.model.entity.RequestHistory;
import com.anonymous.spring.system.service.LogHistoryService;
import com.anonymous.spring.system.service.impl.LogHistoryServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.time.LocalDateTime;

@Component
public class HttpRequestFilter implements Filter {

    private final Logger logger = LoggerFactory.getLogger(HttpRequestFilter.class);

    private final LogHistoryService logHistoryService;

    public HttpRequestFilter(LogHistoryServiceImpl logHistoryService) {
        this.logHistoryService = logHistoryService;
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {

        HttpServletRequest req = (HttpServletRequest) servletRequest;
        HttpServletResponse res = (HttpServletResponse) servletResponse;

        if (req.getUserPrincipal() != null) {
            RequestHistory requestHistory = new RequestHistory();
            requestHistory.setRequestMethod(req.getMethod());
            requestHistory.setRequestPath(req.getRequestURI());
            requestHistory.setRequestDateTime(LocalDateTime.now());
            this.logHistoryService.addHttpRequestLog(requestHistory, req.getUserPrincipal().getName(), req.getRemoteAddr());
            logger.info("This line after add http request log execute ....");
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
