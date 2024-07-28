package com.globe.gvendor.service;

import com.globe.gvendor.model.Employee;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

public interface IEmployeeService {
    Employee addEmployee(Employee employee);
    List<Employee> getEmployees();
    Employee updateEmployee(Employee employee, Long id);
    Employee getEmployeeById(Long id);
    void deleteEmployee(Long id);
    long countEmployees();

}
