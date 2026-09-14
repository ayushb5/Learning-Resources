package com.example.springcore.applicationcontext;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class ApplicationContextDemo {
	public static void main(String[] args) {
		/*
		 * Create the ApplicationContext.
		 *
		 * AnnotationConfigApplicationContext reads our Java configuration class and
		 * creates the configured Spring beans.
		 */
		ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
		/*
		 * Ask the ApplicationContext for the NotificationService bean.
		 *
		 * Spring has already managed its dependency.
		 */
		NotificationService notificationService = context.getBean(NotificationService.class);
		// Use the Spring-managed bean.
		notificationService.sendNotification();
	}
}
