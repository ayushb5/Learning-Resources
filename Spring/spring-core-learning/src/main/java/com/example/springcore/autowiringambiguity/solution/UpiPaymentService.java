package com.example.springcore.autowiringambiguity.solution;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Component
//@Primary // Default PaymentService Bean - Output will be - Payment using UPI
public class UpiPaymentService implements PaymentService {

	@Override
	public void pay() {
		System.out.println("Payment using UPI");
	}

}
