package com.anonymous.spring.system.http.controller.admin;

import com.anonymous.spring.system.model.entity.LoginHistory;
import com.anonymous.spring.system.service.LogHistoryService;
import com.anonymous.spring.system.service.impl.LogHistoryServiceImpl;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping("/api/log")
public class LogController {

    private final LogHistoryService logHistoryService;

    public LogController(LogHistoryServiceImpl loginHistoryService) {
        this.logHistoryService = loginHistoryService;
    }

    @GetMapping
    public Collection<LoginHistory> getAllLoginHistory() {
        return this.logHistoryService.getAllLoginHistory();
    }
}
