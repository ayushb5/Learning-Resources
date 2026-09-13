package com.example.springcore.dependencyinjection;

public class SetterDIExample {
	// Dependency is stored in a field.
	private MessageService messageService;

	/*
	 * Setter Dependency Injection:
	 *
	 * The dependency is provided through a setter method after the object has been
	 * created.
	 */
	public void setMessageService(MessageService messageService) {
		this.messageService = messageService;
	}

	public void notifyUser() {
		// Use the injected dependency.
		messageService.sendMessage();
		System.out.println("User notified!");
	}
}
