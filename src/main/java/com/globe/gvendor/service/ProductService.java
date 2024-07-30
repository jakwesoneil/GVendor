package com.globe.gvendor.service;

import com.globe.gvendor.exception.ProductAlreadyExistException;
import com.globe.gvendor.exception.ProductNotFoundException;
import com.globe.gvendor.model.Product;
import com.globe.gvendor.model.Vendor;
import com.globe.gvendor.repository.ProductRepository;
import com.globe.gvendor.repository.VendorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService implements IProductService {

    private final ProductRepository productRepository;
    private final VendorRepository vendorRepository;

    //Getting every product in database
    @Override
    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    //Adding new product
    @Override
    public Product addProduct(Product product) {
        if(productAlreadyExists(product.getProductName())){
            throw new ProductAlreadyExistException(product.getProductName() + " already exists!");
        }
        if (product.getVendorName() != null) {
            Vendor vendor = vendorRepository.findById(product.getVendorName().getId())
                    .orElseThrow(() -> new RuntimeException("Vendor not found with id: " + product.getVendorName().getId()));
            product.setVendorName(vendor);
        }
        return productRepository.save(product);

    }


    //Updating product by id
    @Override
    public Product updateProduct(Product product, Long id) {
        return productRepository.findById(id).map(prd -> {
            prd.setProductName(product.getProductName());
            prd.setProductLogo(product.getProductLogo());
            prd.setProductType(product.getProductType());
            prd.setVendorName(product.getVendorName());
            prd.setYearAcquired(product.getYearAcquired());
            return productRepository.save(prd);
        }).orElseThrow(() -> new ProductNotFoundException("Sorry, product could not be found."));//you need this coz its like if else statement
    }

    //Getting product by id
    @Override
    public Product getProductById(Long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException("Sorry, no product found with the Id " + id));
    }

    //Deleting product by id
    @Override
    public void deleteProduct(Long id) {
        if (!productRepository.existsById(id)){
            throw new ProductNotFoundException("Sorry, product not found.");
        }
        productRepository.deleteById(id);
    }
    //Getting product by product name
    private boolean productAlreadyExists(String productName) {
        return productRepository.findByProductName(productName).isPresent();
    }

    public long countProducts() {
        return productRepository.count();
    }
}
