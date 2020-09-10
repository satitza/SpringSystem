package com.anonymous.spring.system.http.websocket;

import com.anonymous.spring.system.model.enums.NotifyTypeEnum;
import com.anonymous.spring.system.service.impl.NotifyServiceImpl;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class WebSocketController {

    private final NotifyServiceImpl notifyService;

    public WebSocketController(NotifyServiceImpl notifyService) {
        this.notifyService = notifyService;
    }

    @MessageMapping("/init-sum-login")
    @SendTo("/topic/sum-login")
    public Integer initSumLogin() {
        return this.notifyService.fetchByType(NotifyTypeEnum.LOGIN);
    }
}
