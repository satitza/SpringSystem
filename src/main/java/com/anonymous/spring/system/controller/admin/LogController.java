package com.anonymous.spring.system.controller.admin;

import com.anonymous.spring.system.model.entity.LoginHistory;
import com.anonymous.spring.system.service.LoginHistoryService;
import com.anonymous.spring.system.service.impl.LoginHistoryServiceImpl;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping("/api/log")
public class LogController {

    private final LoginHistoryService loginHistoryService;

    public LogController(LoginHistoryServiceImpl loginHistoryService) {
        this.loginHistoryService = loginHistoryService;
    }

    @GetMapping
    public Collection<LoginHistory> getAllHistory() {
        return this.loginHistoryService.getAllHistory();
    }

}
