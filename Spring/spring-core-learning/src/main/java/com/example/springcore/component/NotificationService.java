package com.example.springcore.component;

import org.springframework.stereotype.Component;

@Component
public class NotificationService {
	private final EmailService emailService;

	public NotificationService(EmailService emailService) {
		this.emailService = emailService;
	}

	public void sendNotification() {
		emailService.sendEmail();
		System.out.println("Notification sent!");
	}
}
