package com.example.springcore.dependencyinjection;

public class SetterDITest {
	public static void main(String[] args) {
		// Create the dependency.
		MessageService messageService = new EmailService();

		// First create the object.
		SetterDIExample notification = new SetterDIExample();

		/*
		 * Inject the dependency using the setter method.
		 *
		 * Object creation and dependency injection happen as two separate steps.
		 */
		notification.setMessageService(messageService);

		notification.notifyUser();
	}
}
