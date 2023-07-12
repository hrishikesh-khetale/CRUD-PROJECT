package com.vca.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "employees")
public class Employee {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false)
	private String employName;

	@Column(nullable = false)
	private String employDept;

	public Employee() {
	}

	public Long getId() {
		return id;
	}

	public String getEmployName() {
		return employName;
	}

	public String getEmployDept() {
		return employDept;
	}

	@Override
	public String toString() {
		return "Employee [id=" + id + ", employName=" + employName + ", employDept=" + employDept + "]";
	}



}
