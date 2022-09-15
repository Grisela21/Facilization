package com.example.ushtr1Java.service;

import com.example.ushtr1Java.controller.ClientAccountDTO;
import com.example.ushtr1Java.model.Client;

import java.util.List;

public interface ClientService {
    Client createClient(Client client);

    Client updateClient(Client client);

    List<Client> getAllClient();

    Client getClientById(long clientId);

    void deleteClient(long id);

    List<ClientAccountDTO> getAllClientAccounts();
}
