package com.example.springcore.dependencyinjection;

//EmailService is one implementation of MessageService.
public class EmailService implements MessageService {

	@Override
	public void sendMessage() {
		System.out.println("Email sent!");
	}

}
