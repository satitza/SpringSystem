package com.anonymous.spring.system;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan(basePackages = "com.anonymous.spring.system.model.entity")
public class ComAnonymousSpringSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(ComAnonymousSpringSystemApplication.class, args);
	}

}
