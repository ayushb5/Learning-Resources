package com.example.springcore.dependencyinjection;

public class ConstructorDIExample {
	// Dependency is stored in a final field.
	// It cannot be changed after the object is created.
	private final MessageService messageService;

	/*
	 * Constructor Dependency Injection:
	 *
	 * The dependency is provided through the constructor instead of creating it
	 * inside this class.
	 *
	 * Example: new ConstructorDIExample(new EmailService());
	 */
	public ConstructorDIExample(MessageService messageService) {
		this.messageService = messageService;
	}

	public void notifyUser() {
		// Use the injected dependency.
		messageService.sendMessage();
		System.out.println("User notified!");
	}
}
