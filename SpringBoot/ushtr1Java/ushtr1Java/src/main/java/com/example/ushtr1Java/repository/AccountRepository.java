package com.example.ushtr1Java.repository;

import com.example.ushtr1Java.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account, Long> {
}
