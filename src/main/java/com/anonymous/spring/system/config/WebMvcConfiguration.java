package com.anonymous.spring.system.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.web.servlet.config.annotation.ContentNegotiationConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfiguration implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**").allowedMethods("POST", "PUT", "GET", "OPTIONS", "DELETE")
                .allowedHeaders("access-control-allow-headers", "authorization", "Content-Type", "X-XSRF-TOKEN")
                .allowedOrigins("*");
    }

    @Override
    public void configureContentNegotiation(ContentNegotiationConfigurer configurer) {
        configurer
                .defaultContentType(MediaType.APPLICATION_JSON) //If Rest not specify return content type use JSON
                .ignoreAcceptHeader(true); //Ignore request header Accept
    }


}
