package com.globe.gvendor.repository;

import com.globe.gvendor.model.Vendor;
import org.springframework.data.jpa.repository.JpaRepository;


public interface VendorRepository extends JpaRepository<Vendor, Long> {

}