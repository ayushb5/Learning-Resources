package com.example.springcore.circulardependency.solution;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class App {
	public static void main(String[] args) {
		ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);

		OrderService service = context.getBean(OrderService.class);
		service.placeOrder();

//		IMPORTANT NOTE
		/*
		 * Even if this solution works, it is generally not recommended.
		 *
		 * Circular dependencies usually indicate tightly coupled classes and poor
		 * separation of responsibilities.
		 *
		 * This can lead to violations of the Single Responsibility Principle (SRP),
		 * where a class starts depending on or handling responsibilities that should
		 * belong to another component.
		 *
		 * Preferred solution: Redesign the dependencies to remove the cycle and keep
		 * responsibilities clearly separated.
		 */
	}
}
