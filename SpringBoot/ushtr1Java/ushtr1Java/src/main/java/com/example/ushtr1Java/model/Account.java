package com.example.ushtr1Java.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;
@Data

@AllArgsConstructor
@Entity
@Table(name = "accounts")
public class Account {
    public Account() {

    }

    public Account(long acc_number, String branch_code, String ccy, String amount,long client_number){
        this.acc_number=acc_number;
        this.branch_code=branch_code;
        this.ccy=ccy;
        this.amount=amount;
        this.client_number=client_number;

    }
    @Id
    private long acc_number;

    @Column(name = "branch_code")
    private String branch_code;


    @Column(name = "ccy")
    private String ccy;

    @Column(name = "amount")
    private String amount;

    @Column(name = "client_number")
    private long client_number;

    public void setClient_number(long client_number) {
        this.client_number = client_number;
    }

    public long getClient_number() {
        return client_number;
    }

    @CreationTimestamp
    private Date createdAt;

    @CreationTimestamp
    private Date updatedAt;



    public void setAcc_number(long acc_number) {
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

    public long getAcc_number() {
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







