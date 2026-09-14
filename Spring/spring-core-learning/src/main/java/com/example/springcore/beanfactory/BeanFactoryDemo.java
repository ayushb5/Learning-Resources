package com.example.springcore.beanfactory;

import org.springframework.beans.factory.support.DefaultListableBeanFactory;
import org.springframework.beans.factory.xml.XmlBeanDefinitionReader;
import org.springframework.core.io.ClassPathResource;

public class BeanFactoryDemo {
	public static void main(String[] args) {
		/*
		 * BeanFactory is the basic Spring IoC container.
		 *
		 * BeanFactory is an interface, so we use DefaultListableBeanFactory as its
		 * implementation.
		 */
		DefaultListableBeanFactory factory = new DefaultListableBeanFactory();

		/*
		 * XmlBeanDefinitionReader reads bean definitions from the XML configuration
		 * file.
		 */
		XmlBeanDefinitionReader reader = new XmlBeanDefinitionReader(factory);

		/*
		 * Load beans.xml from src/main/resources.
		 *
		 * Spring reads the bean definitions and registers them with the BeanFactory.
		 */
		reader.loadBeanDefinitions(new ClassPathResource("beans.xml"));

		/*
		 * Ask the BeanFactory for the NotificationService bean.
		 *
		 * BeanFactory manages the object and its dependency.
		 */

		NotificationService notificationService = factory.getBean(NotificationService.class);

		// Use the Spring-managed bean.
		notificationService.sendNotification();
	}
}
