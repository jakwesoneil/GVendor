package com.globe.gvendor.repository;

import com.globe.gvendor.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
public interface ProductRepository extends JpaRepository<Product, Long> {

}