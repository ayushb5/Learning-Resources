package com.example.springcore.autowiringambiguity.issue;

import org.springframework.stereotype.Component;

@Component
public class OrderService {
	private final PaymentService paymentService;

	// ❌ Ambiguity: 2 PaymentService Beans are available
	public OrderService(PaymentService paymentService) {
		this.paymentService = paymentService;
	}

	public void placeOrder() {
		paymentService.pay();
	}
}
