package com.globe.gvendor.controller;

import com.globe.gvendor.model.Vendor;
import com.globe.gvendor.service.IVendorService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:5173/") //put the localhost of your frontend
@RestController
@RequestMapping("/vendors")
@RequiredArgsConstructor
public class VendorController {
    private final IVendorService vendorService;

    //CRUD Operations Get, Post, Put, Delete
    @GetMapping
    public ResponseEntity<List<Vendor>> getVendors(){
        return new ResponseEntity<>(vendorService.getVendors(), HttpStatus.FOUND);

    }

    @PostMapping
    public Vendor addVendor(@RequestBody Vendor vendor){
        return vendorService.addVendor(vendor);
    }

    @PutMapping ("/update/{id}")
    public Vendor updateVendor (@RequestBody Vendor vendor, @PathVariable Long id){
        return vendorService.updateVendor(vendor, id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteEmployee(@PathVariable Long id){
        vendorService.deleteVendor(id);
    }

    @GetMapping("/employee/{id}")
    public Vendor getVendorById(@PathVariable Long id){
        return vendorService.getVendorById(id);
    }

}
