package com.globe.gvendor.service;

import com.globe.gvendor.exception.VendorAlreadyExistException;
import com.globe.gvendor.exception.VendorNotFoundException;
import com.globe.gvendor.model.Vendor;
import com.globe.gvendor.repository.VendorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class VendorService implements IVendorService {

    private final VendorRepository vendorRepository;

    //Getting every Vendor in database
    @Override
    public List<Vendor> getVendors() {
        return vendorRepository.findAll();
    }

    //Adding new vendor
    @Override
    public Vendor addVendor(Vendor vendor) {
        if(vendorAlreadyExists(vendor.getVendorName())){
            throw new VendorAlreadyExistException(vendor.getVendorName() + " already exists!");
        }
        return vendorRepository.save(vendor);

    }


    //Updating vendor by id
    @Override
    public Vendor updateVendor(Vendor vendor, Long id) {
        return vendorRepository.findById(id).map(vndr -> {
            vndr.setVendorName(vendor.getVendorName());
            vndr.setVendorLogo(vendor.getVendorLogo());
            vndr.setCountry(vendor.getCountry());
            vndr.setYearFounded(vendor.getYearFounded());
            vndr.setProductCount(vendor.getProductCount()); // count all products of a vendor so make a logic for it
            vndr.setContactPersonEmail(vendor.getContactPersonEmail());
            return vendorRepository.save(vndr);
        }).orElseThrow(() -> new VendorNotFoundException("Sorry, vendor could not be found."));//you need this coz its like if else statement
    }

    //Getting vendor by id
    @Override
    public Vendor getVendorById(Long id) {
        return vendorRepository.findById(id)
                .orElseThrow(() -> new VendorNotFoundException("Sorry, no vendor found with the Id " + id));
    }

    //Deleting vendor by id
    @Override
    public void deleteVendor(Long id) {
        if (!vendorRepository.existsById(id)){
            throw new VendorNotFoundException("Sorry, vendor not found.");
        }
        vendorRepository.deleteById(id);
    }
    //Getting vendor by vendor name
    private boolean vendorAlreadyExists(String vendorName) {
        return vendorRepository.findByVendorName(vendorName).isPresent();
    }

    public long countVendors() {
        return vendorRepository.count();
    }
}
