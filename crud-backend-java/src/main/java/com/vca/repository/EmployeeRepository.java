package com.vca.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vca.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
