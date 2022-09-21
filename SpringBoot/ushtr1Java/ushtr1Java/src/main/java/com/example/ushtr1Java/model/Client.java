package com.example.ushtr1Java.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import javax.transaction.Transactional;
import java.util.*;


@Data

@AllArgsConstructor
@Entity
@Transactional

@Table(name = "clients")
public class Client {
    public Client() {
    }

    public Client(long client_number) {

        this.client_number=client_number;
    }

    public Client(long client_number,String name,String address,String telephone_number){
        this.client_number=client_number;
        this.name=name;
        this.address=address;
        this.telephone_number=telephone_number;
    }
    @Id
    private long client_number;

    @Column(name = "name")
    private String name;

    @Column(name = "address")
    private String address;

    @Column(name = "telephone_number")
    private String telephone_number;


    @CreationTimestamp
    private Date createdAt;

    @CreationTimestamp
    private Date updatedAt;


    @OneToMany(
            targetEntity = Account.class,

            cascade = CascadeType.ALL,
            orphanRemoval = true  //kure fsihet klienti te fshiehn e acc e lidhura

    )
    @JoinColumn(name = "client_number", referencedColumnName = "client_number")
    private List<Account> accounts= new ArrayList<>();


    public List<Account> getAccounts() {

        return accounts;
    }



    public void setAccounts(List<Account> accounts) {

        this.accounts.clear();
        this.accounts.addAll(accounts);
    }

    public long getClient_number() {
        return client_number;
    }

    public String getName() {
        return name;
    }

    public String getAddress() {
        return address;
    }

    public String getTelephone_number() {
        return telephone_number;
    }



    public void setClient_number(long client_number) {
        this.client_number = client_number;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setTelephone_number(String telephone_number) {
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


