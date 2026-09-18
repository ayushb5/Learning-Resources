package com.example.springcore.circulardependency.issue;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class App {
	public static void main(String[] args) {
		ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
		
		OrderService service=context.getBean(OrderService.class);
		
		service.placeOrder();
	}
}
