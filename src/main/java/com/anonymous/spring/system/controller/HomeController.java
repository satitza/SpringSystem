package com.anonymous.spring.system.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/home")
public class HomeController {

    public HomeController() {

    }

    @GetMapping("/read")
    public String read() {
        return "home read";
    }

    @GetMapping("/edit")
    public String home() {
        return "home edit";
    }
}
