package com.example.springcore.beanfactory;

public class NotificationService {
	private final EmailService emailService;

	/*
	 * Constructor Dependency Injection:
	 *
	 * NotificationService requires EmailService. The dependency is provided from
	 * outside instead of being created using new.
	 */
	public NotificationService(EmailService emailService) {
		this.emailService = emailService;
	}

	public void sendNotification() {
		// Use the injected EmailService.
		emailService.sendEmail();

		System.out.println("Notification send!");
	}
}
