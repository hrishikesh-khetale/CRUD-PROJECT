package com.vca.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import com.vca.entity.Employee;
import com.vca.exception.ResourceNotFoundException;
import com.vca.repository.EmployeeRepository;

@CrossOrigin(origins = "*")
@RestController
public class EmployeeController {

	@Autowired
	EmployeeRepository repository;

	@GetMapping("/get")
	public String getApi() {
		return "get api called";
	}
	
	
	@GetMapping("/emp")
	public ResponseEntity<List<Employee>> getAllComponentById() {
		List<Employee> components = repository.findAll();

	    if (components.isEmpty()) {
	        throw new ResourceNotFoundException("No data found");
	    }
	    
		return new ResponseEntity<>(components, HttpStatus.OK);
	}

	@PostMapping("/emp")
	public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee) {
	    Employee savedEmployee = repository.save(employee);
	    return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
	}
	@GetMapping("/emp/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable("id") Long id) {
	    Employee employee = repository.findById(id)
	            .orElseThrow(() -> new ResourceNotFoundException("Employee not found with id: " + id));

	    return new ResponseEntity<>(employee, HttpStatus.OK);
	}

	@DeleteMapping("/emp/{id}")
	public ResponseEntity<String> deleteEmployeeById(@PathVariable("id") Long id) {
	    Employee employee = repository.findById(id)
	            .orElseThrow(() -> new ResourceNotFoundException("Employee not found with id: " + id));

	    repository.delete(employee);
	    return new ResponseEntity<>("Employee deleted successfully", HttpStatus.OK);
	}


}
