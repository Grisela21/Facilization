package com.example.ushtr1Java.service;

import com.example.ushtr1Java.controller.ClientAccountDTO;
import com.example.ushtr1Java.exception.ResourceNotFoundException;
import com.example.ushtr1Java.model.Account;
import com.example.ushtr1Java.model.Client;
import com.example.ushtr1Java.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
public class AccountServiceImpl implements AccountService {

    @Autowired
    private AccountRepository accountRepository;



    @Override
    public Account createAccount(Account account) {

        return accountRepository.save(account);
    }

    @Override
    public Account updateAccount(Account account) {
        Optional<Account> accountDb= this.accountRepository.findById(account.getAcc_number());

        if(accountDb.isPresent()){
            Account accountUpdate= accountDb.get();
            accountUpdate.setAcc_number(account.getAcc_number());
            accountUpdate.setAcc_number(account.getAcc_number());
            accountUpdate.setAmount(account.getAmount());
            accountUpdate.setBranch_code(account.getBranch_code());
            accountUpdate.setCcy(account.getCcy());

            accountRepository.save(accountUpdate);
            return accountUpdate;
        }
        else {
            throw new ResourceNotFoundException("Record not found wit id: "+account.getAcc_number());
        }
    }

    @Override
    public List<Account> getAllAccount() {
        return this.accountRepository.findAll();
    }

    @Override
    public Account getAccountById(long AccountId) {
        Optional<Account> accountDb= this.accountRepository.findById(AccountId);

        if(accountDb.isPresent()){
            return accountDb.get();
        }
        else {
            throw new ResourceNotFoundException("Record not found wit id: "+AccountId);

        }
    }

    @Override
    public void deleteAccount(long id) {
        Optional<Account> accoumtDb= this.accountRepository.findById(id);

        if(accoumtDb.isPresent()){
            this.accountRepository.delete(accoumtDb.get());
        }
        else {
            throw new ResourceNotFoundException("Record not found wit id: "+id);

        }
    }
}
