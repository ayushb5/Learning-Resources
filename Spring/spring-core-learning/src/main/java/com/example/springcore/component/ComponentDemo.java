package com.example.springcore.component;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class ComponentDemo {
	public static void main(String[] args) {
		ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
		NotificationService notificationService = context.getBean(NotificationService.class);

		notificationService.sendNotification();
	}
}
