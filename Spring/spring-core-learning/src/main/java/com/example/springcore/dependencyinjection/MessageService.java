package com.example.springcore.dependencyinjection;

//Interface represents the dependency.
//Notification services depend on this abstraction,
//not on a specific implementation like EmailService.
public interface MessageService {
	void sendMessage();
}
