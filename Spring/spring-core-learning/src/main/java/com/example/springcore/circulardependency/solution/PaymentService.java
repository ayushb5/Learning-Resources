package com.example.springcore.circulardependency.solution;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class PaymentService {
//	@Autowired //Field Injection Example - solved and working
	private OrderService orderService;

//	Setter Injection - working
	@Autowired
	public void setOrderService(OrderService orderService) {
		this.orderService = orderService;
	}
	
	public void pay() {
		System.out.println("Payment successful");
		orderService.orderDetails();
	}
	
}
