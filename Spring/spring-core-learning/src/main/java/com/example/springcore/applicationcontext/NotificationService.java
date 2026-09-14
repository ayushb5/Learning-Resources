package com.example.springcore.applicationcontext;

public class NotificationService {
	private final EmailService emailService;

	/*
	 * Constructor Dependency Injection:
	 *
	 * NotificationService requires EmailService. ApplicationContext will provide
	 * this dependency when creating the NotificationService bean.
	 */
	public NotificationService(EmailService emailService) {
		this.emailService = emailService;
	}

	public void sendNotification() {
		// Use the injected dependency.
		emailService.sendEmail();
		System.out.println("Notification sent!");
	}
}
