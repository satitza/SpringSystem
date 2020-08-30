package com.anonymous.spring.system.controller.admin;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    public AdminController() {

    }

    @GetMapping("/read")
    public String read() {
        return "admin read";
    }

    @GetMapping("write")
    public String write() {
        return "admin write";
    }

    @GetMapping("delete")
    public String delete() {
        return "admin delete";
    }
}
