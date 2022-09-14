package com.example.ushtr1Java.service;

import com.example.ushtr1Java.exception.ResourceNotFoundException;
import com.example.ushtr1Java.model.Client;
import com.example.ushtr1Java.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

import static javafx.scene.input.KeyCode.T;

@Service
@Transactional
public class ClientServiceImpl implements ClientService {


    @Autowired
    private ClientRepository clientRepository;



    @Override
    public  Client createClient(Client client) {
        return clientRepository.save(client);
    }

    @Override
    public Client updateClient(Client client) {
        Optional<Client> clientDb= this.clientRepository.findById(client.getId());

        if(clientDb.isPresent()){
            Client clientUpdate= clientDb.get();
            clientUpdate.setId(client.getId());
            clientUpdate.setName(client.getName());
            clientUpdate.setAddress(client.getAddress());
            clientUpdate.setTelephone_number(client.getTelephone_number());

            clientRepository.save(clientUpdate);
            return clientUpdate;
        }
        else {
            throw new ResourceNotFoundException("Record not found wit id: "+client.getId());
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
