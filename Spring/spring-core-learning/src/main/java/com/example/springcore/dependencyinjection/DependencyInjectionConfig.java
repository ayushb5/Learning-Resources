package com.example.springcore.dependencyinjection;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DependencyInjectionConfig {
	/*
	 * @Bean tells Spring:
	 *
	 * "Create and manage the object returned by this method as a Spring bean."
	 */
	@Bean
	public MessageService messageService() {
		// Spring will manage this EmailService object.
		return new EmailService();
	}

	/*
	 * Spring creates FieldDIExample as a bean.
	 *
	 * While creating it, Spring sees @Autowired on the messageService field and
	 * injects the MessageService bean.
	 */
	@Bean
	public FieldDIExample fieldDIExample() {
		return new FieldDIExample();
	}
}
