package com.example.springcore.beanscopes.singleton;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
//By default spring has Singleton scope
//@Scope("singleton") //this is by default so we can skip it
public class EmployeeService {
}
