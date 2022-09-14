package com.example.ushtr1Java;

import com.example.ushtr1Java.model.Account;
import com.example.ushtr1Java.model.Client;
import com.example.ushtr1Java.repository.ClientRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@SpringBootApplication
public class Ushtr1JavaApplication {

	public static void main(String[] args) {

		ConfigurableApplicationContext configurableApplicationContext=
		SpringApplication.run(Ushtr1JavaApplication.class, args);
		ClientRepository clientRepository = configurableApplicationContext.getBean(ClientRepository.class);

		Client client =new Client("andi");
		Account account1 = new Account("9087", "000", "EUR", "6000", client);
		Account account2= new Account("2087", "200", "EUR", "2000", client);
        List<Account> account = Arrays.asList(account1, account2);
		client.setAccounts(account);
		clientRepository.save(client);
	}

}
