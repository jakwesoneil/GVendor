package com.globe.gvendor.repository;

import com.globe.gvendor.model.Employee;
import com.globe.gvendor.model.Vendor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface VendorRepository extends JpaRepository<Vendor, Long> {
    Optional<Vendor> findByVendorName(String vendorName);
}