package com.example.springcore.autowiringambiguity.issue;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Main {
	public static void main(String[] args) {
		ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);

		// ❌ Fails because Spring finds 2 PaymentService Beans
		OrderService orderService = context.getBean(OrderService.class);
		orderService.placeOrder();
	}
}
