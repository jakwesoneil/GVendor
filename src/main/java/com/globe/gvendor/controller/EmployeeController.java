package com.globe.gvendor.controller;

import com.globe.gvendor.model.Employee;
import com.globe.gvendor.service.IEmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employees")
@RequiredArgsConstructor
public class EmployeeController {
    private final IEmployeeService employeeService; //if not final it would not be injected

    //CRUD Operations Get, Post, Put, Delete
    @GetMapping
    public ResponseEntity<List<Employee>> getEmployees(){
        return new ResponseEntity<>(employeeService.getEmployees(), HttpStatus.FOUND);

    }

    @PostMapping
    public Employee addEmployee(@RequestBody Employee employee){
        return employeeService.addEmployee(employee);
    }

    @PutMapping ("/update/{id}")
    public Employee updateEmployee (@RequestBody Employee employee, @PathVariable Long id){
        return employeeService.updateEmployee(employee, id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteEmployee(@PathVariable Long id){
        employeeService.deleteEmployee(id);
    }

    @GetMapping("/employee/{id}")
    public Employee getEmployeeById(@PathVariable Long id){
        return employeeService.getEmployeeById(id);
    }

}
