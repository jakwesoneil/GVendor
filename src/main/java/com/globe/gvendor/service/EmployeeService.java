package com.globe.gvendor.service;

import com.globe.gvendor.exception.EmployeeAlreadyExistException;
import com.globe.gvendor.exception.EmployeeNotFoundException;
import com.globe.gvendor.model.Employee;
import com.globe.gvendor.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EmployeeService implements IEmployeeService {

    private final EmployeeRepository employeeRepository;

    //Getting every employee in database
    @Override
    public List<Employee> getEmployees() {
        return employeeRepository.findAll();
    }

    //Adding new user
    @Override
    public Employee addEmployee(Employee employee) {
        if(employeeAlreadyExists(employee.getEmail())){
            throw new EmployeeAlreadyExistException(employee.getEmail() + " already exists!");
        }
        return employeeRepository.save(employee);
    }

    //Updating user by id
    @Override
    public Employee updateEmployee(Employee employee, Long id) {
        return employeeRepository.findById(id).map(emp -> {
            emp.setFirstName(employee.getFirstName());
            emp.setLastName(employee.getLastName());
            emp.setEmail(employee.getEmail());
            emp.setDepartment(employee.getDepartment());
            return employeeRepository.save(emp);
        }).orElseThrow(() -> new EmployeeNotFoundException("Sorry, employee could not be found."));//you need this coz its like if else statement
    }

    //Getting user by id
    @Override
    public Employee getEmployeeById(Long id) {
        return employeeRepository.findById(id)
                .orElseThrow(() -> new EmployeeNotFoundException("Sorry, no employee found with the Id " + id));
    }

    //Deleting user by id
    @Override
    public void deleteEmployee(Long id) {
        if (!employeeRepository.existsById(id)){
            throw new EmployeeNotFoundException("Sorry, employee not found.");
        }
        employeeRepository.deleteById(id);
    }
    //Getting user by email
    private boolean employeeAlreadyExists(String email) {
        return employeeRepository.findByEmail(email).isPresent();
    }
}
