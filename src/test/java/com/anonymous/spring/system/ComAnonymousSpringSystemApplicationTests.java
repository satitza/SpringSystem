package com.anonymous.spring.system;

import com.anonymous.spring.system.service.async.AsyncComponent;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class ComAnonymousSpringSystemApplicationTests {

    @Autowired
    AsyncComponent asyncComponent;

    @Test
    void contextLoads() throws InterruptedException {

        asyncComponent.asyncMethodWithReturnThreadName();

        System.out.println("Line 1");
        System.out.println("Line 2");
    }
}
