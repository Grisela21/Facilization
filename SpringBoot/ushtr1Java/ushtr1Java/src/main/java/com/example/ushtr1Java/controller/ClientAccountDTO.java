package com.example.ushtr1Java.controller;

import lombok.Data;

import javax.annotation.sql.DataSourceDefinition;

@Data

public class ClientAccountDTO {
    private long client_number;
    private String name;
    private long acc_number;
    private String branch_code;
    private String ccy;
    private String amount;

}
