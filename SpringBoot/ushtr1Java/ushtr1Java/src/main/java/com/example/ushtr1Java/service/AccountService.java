package com.example.ushtr1Java.service;

import com.example.ushtr1Java.controller.ClientAccountDTO;
import com.example.ushtr1Java.model.Account;
import com.example.ushtr1Java.model.Client;

import java.util.List;

public interface AccountService {



    Account createAccount(Account account);

    Account updateAccount(Account account);

    List<Account> getAllAccount();

    Account getAccountById(long AccountId);

    void deleteAccount(long id);


}
