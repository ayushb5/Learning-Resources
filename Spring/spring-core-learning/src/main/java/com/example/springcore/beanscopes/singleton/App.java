package com.example.springcore.beanscopes.singleton;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class App {
	public static void main(String[] args) {
//		Singleton is the default Spring Bean scope in which Spring creates one Bean instance per Spring IoC Container.

		ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
		EmployeeService e1 = context.getBean(EmployeeService.class);
		EmployeeService e2 = context.getBean(EmployeeService.class);

//		Both references point to the same Bean instance.
		System.out.println(e1 == e2); // true
	}
}
