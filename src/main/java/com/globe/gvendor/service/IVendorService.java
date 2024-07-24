package com.globe.gvendor.service;

import com.globe.gvendor.model.Vendor;

import java.util.List;

public interface IVendorService {
    Vendor addVendor(Vendor vendor);
    List<Vendor> getVendors();
    Vendor updateVendor(Vendor vendor, Long id);
    Vendor getVendorById(Long id);

    void deleteVendor(Long id);

}
