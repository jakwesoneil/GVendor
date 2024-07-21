package com.globe.gvendor.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.NaturalId;
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
    private Vendor vendor;

    @NaturalId(mutable = true) //will make email a unique key which could not be modified so it was set to true to make it editable
    private String contactPersonEmail;
}
