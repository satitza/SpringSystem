package com.anonymous.spring.system.controller.admin;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin/public")
public class AdminPublicController {

    public AdminPublicController() {

    }

    @GetMapping
    public String publicAccess() {
        return "admin public controller";
    }
}
