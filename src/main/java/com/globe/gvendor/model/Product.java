package com.globe.gvendor.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id; //primary key from @Id
    private String productName;
    private String productLogo; //think of other way
    private String productType;
    @ManyToOne
    private Vendor vendorName;
    private String yearAcquired;
}
