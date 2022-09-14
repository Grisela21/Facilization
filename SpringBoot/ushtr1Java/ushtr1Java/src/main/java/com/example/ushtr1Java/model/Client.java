package com.example.ushtr1Java.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.format.annotation.DateTimeFormat;

import javax.annotation.sql.DataSourceDefinition;
import javax.persistence.*;
import javax.transaction.Transactional;
import java.math.BigDecimal;
import java.util.*;


@Entity
@Transactional

@Table(name = "clients")
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "client_number")
    private String client_number;

    @Column(name = "name")
    private String name;

    @Column(name = "address")
    private String address;

    @Column(name = "telephone_number")
    private int telephone_number;





    @CreationTimestamp
    private Date createdAt;

    @CreationTimestamp
    private Date updatedAt;

/////lidhgja /////////////////////////////////////////////////////////////////////////

    @OneToMany(
            mappedBy = "client", //sepse kjo eshte tek acccount si obj
            cascade = CascadeType.ALL,
            orphanRemoval = true  //kure fsihet klienti te fshiehn e acc e lidhura

    )

    private List<Account> accounts= new ArrayList<>();

    public Client(String name){
        this.name=name;
    }

    public String getClient_number() {
        return client_number;
    }

    public List<Account> getAccounts() {
        return accounts;
    }

    public void setClient_number(String client_number) {
        this.client_number = client_number;
    }

    public void setAccounts(List<Account> accounts) {
        this.accounts = accounts;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getAddress() {
        return address;
    }

    public int getTelephone_number() {
        return telephone_number;
    }



    public void setId(long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setTelephone_number(int telephone_number) {
        this.telephone_number = telephone_number;
    }



    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

}
