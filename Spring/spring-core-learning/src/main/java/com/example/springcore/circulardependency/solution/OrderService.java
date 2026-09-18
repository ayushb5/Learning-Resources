package com.example.springcore.circulardependency.solution;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class OrderService {
//	@Autowired //Field Injection Example - solved and working
	private PaymentService paymentService;

//	Setter Injection - working
	@Autowired
	public void setPaymentService(PaymentService paymentService) {
		this.paymentService = paymentService;
	}

	public void placeOrder() {
		paymentService.pay();
		System.out.println("Order placed");
	}

	public void orderDetails() {
		System.out.println("Order details...");
	}
}
