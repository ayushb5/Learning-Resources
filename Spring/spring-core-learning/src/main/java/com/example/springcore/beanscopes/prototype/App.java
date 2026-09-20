package com.example.springcore.beanscopes.prototype;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class App {
	public static void main(String[] args) {
//		Prototype scope creates a new Bean instance every time the Bean is requested from the Spring Container.
//		In lazy initialization, Spring creates the Bean only when it is first requested or needed.
//		Default for prototype scope is lazy initialization
		
		ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
		Employee e1 = context.getBean(Employee.class);
		Employee e2 = context.getBean(Employee.class);

//		references point to the different Bean instance.
		System.out.println(e1 == e2); // false
	}
}
