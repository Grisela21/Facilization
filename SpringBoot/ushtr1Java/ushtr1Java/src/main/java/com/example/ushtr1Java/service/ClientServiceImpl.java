package com.example.ushtr1Java.service;

import com.example.ushtr1Java.controller.ClientAccountDTO;
import com.example.ushtr1Java.exception.ResourceNotFoundException;
import com.example.ushtr1Java.model.Client;
import com.example.ushtr1Java.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
public class ClientServiceImpl implements ClientService {


    @Autowired
    private ClientRepository clientRepository;


    public List<ClientAccountDTO>getAllClientAccounts(){
        return clientRepository.findAll()
                .stream()
                .map(this::convertEntityToDto)
                .collect(Collectors.toList());

    }

    private ClientAccountDTO convertEntityToDto(Client client){
        ClientAccountDTO clientAccountDTO= new ClientAccountDTO();
        clientAccountDTO.setClient_number(client.getClient_number());
        clientAccountDTO.setName(client.getName());
        clientAccountDTO.setAcc_number(client.getAccounts().get(0).getAcc_number());
        clientAccountDTO.setBranch_code(client.getAccounts().get(0).getBranch_code());
        clientAccountDTO.setAmount(client.getAccounts().get(0).getAmount());
        clientAccountDTO.setCcy(client.getAccounts().get(1).getCcy());
        return clientAccountDTO;
    }














    @Override
    public  Client createClient(Client client) {
        return clientRepository.save(client);
    }

    @Override
    public Client updateClient(Client client) {
        Optional<Client> clientDb= this.clientRepository.findById(client.getClient_number());

        if(clientDb.isPresent()){
            Client clientUpdate= clientDb.get();
            clientUpdate.setClient_number(client.getClient_number());
            clientUpdate.setName(client.getName());
            clientUpdate.setAddress(client.getAddress());
            clientUpdate.setTelephone_number(client.getTelephone_number());
            clientUpdate.setAccounts(client.getAccounts());

            clientRepository.save(clientUpdate);
            return clientUpdate;
        }
        else {
            throw new ResourceNotFoundException("Record not found wit id: "+client.getClient_number());
        }
    }

    @Override
    public List<Client> getAllClient() {

        return this.clientRepository.findAll();
    }

    @Override
    public Client getClientById(long clientId) {
        Optional<Client> clientDb= this.clientRepository.findById(clientId);

        if(clientDb.isPresent()){
            return clientDb.get();
        }
        else {
            throw new ResourceNotFoundException("Record not found wit id: "+clientId);

        }
    }

    @Override
    public void deleteClient(long id) {
        Optional<Client> clientDb= this.clientRepository.findById(id);

        if(clientDb.isPresent()){
            this.clientRepository.delete(clientDb.get());
        }
        else {
            throw new ResourceNotFoundException("Record not found wit id: "+id);

        }

    }
}
