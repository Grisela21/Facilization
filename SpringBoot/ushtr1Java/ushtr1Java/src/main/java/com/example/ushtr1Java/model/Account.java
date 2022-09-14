package com.example.ushtr1Java.model;

import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "accounts")
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;


    @Column(name = "acc_number")
    private String acc_number;

    @Column(name = "branch_code")
    private String branch_code;


    @Column(name = "ccy")
    private String ccy;

    @Column(name = "amount")
    private String amount;


    @CreationTimestamp
    private Date createdAt;

    @CreationTimestamp
    private Date updatedAt;


      @ManyToOne
      @JoinColumn(name = "client_number", referencedColumnName = "id")
      private Client client;

    public Account() {
    }

    public Account(String acc_number, String branch_code, String ccy, String amount, Client client){
             this.acc_number=acc_number;
             this.branch_code=branch_code;
             this.ccy=ccy;
             this.amount=amount;
             this.client=client;
      }

    public void setId(long id) {
        this.id = id;
    }

    public void setAcc_number(String acc_number) {
        this.acc_number = acc_number;
    }

    public void setBranch_code(String branch_code) {
        this.branch_code = branch_code;
    }

    public void setCcy(String ccy) {
        this.ccy = ccy;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }

    public long getId() {
        return id;
    }

    public String getAcc_number() {
        return acc_number;
    }

    public String getBranch_code() {
        return branch_code;
    }

    public String getCcy() {
        return ccy;
    }

    public String getAmount() {
        return amount;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

}
