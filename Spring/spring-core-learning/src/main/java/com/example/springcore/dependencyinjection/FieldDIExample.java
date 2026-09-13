package com.example.springcore.dependencyinjection;

import org.springframework.beans.factory.annotation.Autowired;

public class FieldDIExample {
	/*
	 * Field Dependency Injection:
	 *
	 * @Autowired tells Spring to inject a suitable MessageService bean directly
	 * into this field.
	 *
	 * We don't create EmailService here. Spring manages and injects the dependency.
	 */
	@Autowired
	private MessageService messageService;

	public void notifyUser() {
		// Use the dependency injected by Spring.
		messageService.sendMessage();
		System.out.println("User notified!");
	}
}
