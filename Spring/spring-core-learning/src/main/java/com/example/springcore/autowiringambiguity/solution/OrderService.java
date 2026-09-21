package com.example.springcore.autowiringambiguity.solution;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
public class OrderService {
	private final PaymentService paymentService;

	public OrderService(@Qualifier("creditCardPaymentService") PaymentService paymentService) {
		this.paymentService = paymentService;
	}

	public void placeOrder() {
		paymentService.pay();
	}
}

// Here for @Qualifier("creditCardPaymentService) Output- Payment using Credit card
// Here for @Qualifier("upiPaymentService) Output- Payment using UPI