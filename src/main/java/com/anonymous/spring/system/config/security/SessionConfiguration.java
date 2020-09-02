package com.anonymous.spring.system.config.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.session.data.redis.config.annotation.web.http.EnableRedisHttpSession;
import org.springframework.session.web.context.AbstractHttpSessionApplicationInitializer;

@Configuration
@EnableRedisHttpSession
public class SessionConfiguration extends AbstractHttpSessionApplicationInitializer {
}
