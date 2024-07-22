package com.globe.gvendor.controller;

import com.globe.gvendor.model.Product;
import com.globe.gvendor.service.IProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:5173/") //put the localhost of your frontend
@RestController
@RequestMapping("/products")
@RequiredArgsConstructor
public class ProductController {
    private final IProductService productService; //if not final it would not be injected

    //CRUD Operations Get, Post, Put, Delete
    @GetMapping
    public ResponseEntity<List<Product>> getProduct(){
        return new ResponseEntity<>(productService.getProducts(), HttpStatus.FOUND);

    }

    @PostMapping
    public Product addProduct(@RequestBody Product product){
        return productService.addProduct(product);
    }

    @PutMapping ("/update/{id}")
    public Product updateProduct (@RequestBody Product product, @PathVariable Long id){
        return productService.updateProduct(product, id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteEmployee(@PathVariable Long id){
        productService.deleteProduct(id);
    }

    @GetMapping("/product/{id}")
    public Product getProductById(@PathVariable Long id){
        return productService.getProductById(id);
    }

}
