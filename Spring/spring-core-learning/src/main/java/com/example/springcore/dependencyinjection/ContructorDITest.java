package com.example.springcore.dependencyinjection;

public class ContructorDITest {
	public static void main(String[] args) {
		// Create the dependency.
		MessageService messageService = new EmailService();

		/*
		 * Inject MessageService through the constructor.
		 *
		 * This is Dependency Injection: the class receives its dependency from outside
		 * instead of creating it itself.
		 */
		ConstructorDIExample notification = new ConstructorDIExample(messageService);

		notification.notifyUser();
	}
}
