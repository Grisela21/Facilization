package com.example.ushtr1Java.repository;

import com.example.ushtr1Java.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository  extends JpaRepository<Client, Long> {
}
