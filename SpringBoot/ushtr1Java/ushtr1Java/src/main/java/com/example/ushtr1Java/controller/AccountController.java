package com.example.ushtr1Java.controller;

import com.example.ushtr1Java.model.Account;
import com.example.ushtr1Java.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AccountController {

    @Autowired
    private AccountService accountService ;




    @GetMapping("/accounts")
    public ResponseEntity<List<Account>> getAllAccount(){
        return ResponseEntity.ok().body(accountService.getAllAccount());
    }

    @GetMapping("/accounts/{id}")
    public ResponseEntity<Account> getAccountById(@PathVariable long id){
        return ResponseEntity.ok().body(accountService.getAccountById(id));
    }

    @PostMapping("/accounts")
    public  ResponseEntity<Account> createAccount(@RequestBody Account account){
        return  ResponseEntity.ok().body(this.accountService.createAccount(account));

    }

    @PutMapping("/accounts/{id}")
    public ResponseEntity<Account> updateAccount(@PathVariable long id, @RequestBody Account account){

        account.setAcc_number(id);
        return  ResponseEntity.ok().body(this.accountService.updateAccount(account));

    }

    @DeleteMapping("/accounts/{id}")
    public HttpStatus deleteAccount(@PathVariable long id){
        this.accountService.deleteAccount(id);
        return HttpStatus.OK;
    }



}
