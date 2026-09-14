package com.example.springcore.applicationcontext;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {
	/*
	 * @Bean tells Spring to create and manage the EmailService object as a Spring
	 * bean.
	 */
	@Bean
	public EmailService emailService() {
		return new EmailService();
	}

	/*
	 * @Bean tells Spring to create and manage NotificationService.
	 *
	 * EmailService is automatically provided to the constructor by Spring.
	 */
	@Bean
	public NotificationService notificationService(EmailService emailService) {
		return new NotificationService(emailService);
	}
	
	
}
