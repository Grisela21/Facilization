package com.example.ushtr1Java;

import com.example.ushtr1Java.model.Account;
import com.example.ushtr1Java.model.Client;
import com.example.ushtr1Java.repository.AccountRepository;
import com.example.ushtr1Java.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@SpringBootApplication
public class Ushtr1JavaApplication implements CommandLineRunner {

	public static void main(String[] args) {

		//ConfigurableApplicationContext configurableApplicationContext=
				SpringApplication.run(Ushtr1JavaApplication.class, args);
		/*ClientRepository clientRepository = configurableApplicationContext.getBean(ClientRepository.class);

		Client client =new Client(100,"andi","Tirane", "06956789007");
		Account account1 = new Account(1003, "000", "EUR", "6000",100);
		Account account2= new Account(2002, "200", "EUR", "2000",100);
		List<Account> account = Arrays.asList(account1, account2);
		client.setAccounts(account);
		clientRepository.save(client);
		Client client2 =new Client(200,"beni","Gramsh", "06956789007");
		Account accountA1 = new Account(9087, "000", "EUR", "6000",200);
		Account accountA2= new Account(2087, "200", "EUR", "2000",200);
		List<Account> accountA = Arrays.asList(accountA1, accountA2);
		client2.setAccounts(accountA);
		clientRepository.save(client2);*/
	}
      @Autowired
	private ClientRepository clientRepository;

	@Autowired
	private AccountRepository accountRepository;






	@Override
	public void run(String... args) throws Exception {





		Client client= new Client();
		client.setClient_number(600);
		client.setName("Banko");
		client.setAddress("Tirane");
		client.setTelephone_number("345678");
		clientRepository.save(client);


		Client client2= new Client();
		client.setClient_number(700);
		client.setName("Goku");
		client.setAddress("Tirane");
		client.setTelephone_number("345678");
		clientRepository.save(client);


		Account account= new Account();
		account.setAcc_number(5678);
		account.setBranch_code("000");
		account.setAmount("3000");
		account.setCcy("EUR");
		account.setClient_number(600);
		accountRepository.save(account);
	}
}
