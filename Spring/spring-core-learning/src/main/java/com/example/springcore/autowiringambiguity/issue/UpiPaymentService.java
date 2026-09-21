package com.example.springcore.autowiringambiguity.issue;

import org.springframework.stereotype.Component;

@Component
public class UpiPaymentService implements PaymentService {

	@Override
	public void pay() {
		System.out.println("Payment using UPI");
	}

}
