package com.example.springcore.dependencyinjection;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class FieldDITest {
	public static void main(String[] args) {
		/*
		 * Create the Spring IoC Container.
		 *
		 * The container reads our configuration class and manages the beans defined
		 * there.
		 */
		ApplicationContext context = new AnnotationConfigApplicationContext(DependencyInjectionConfig.class);

		/*
		 * Ask Spring for the FieldDIExample bean.
		 *
		 * Spring has already created the object and injected its MessageService
		 * dependency.
		 */
		FieldDIExample notification = context.getBean(FieldDIExample.class);

		notification.notifyUser();
	}
}
