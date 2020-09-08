package com.anonymous.spring.system.service.async;

import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class AsyncComponent {

    @Async
    public void asyncMethodWithReturnThreadName() throws InterruptedException {
        System.out.println("Execute method async thread name : " + Thread.currentThread().getName());
    }
}
