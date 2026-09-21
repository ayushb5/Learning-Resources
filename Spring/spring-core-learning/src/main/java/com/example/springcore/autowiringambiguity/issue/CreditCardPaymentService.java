package com.example.springcore.autowiringambiguity.issue;

import org.springframework.stereotype.Component;

@Component
public class CreditCardPaymentService implements PaymentService {

	@Override
	public void pay() {
		System.out.println("Payment using Credit card");
	}

}
