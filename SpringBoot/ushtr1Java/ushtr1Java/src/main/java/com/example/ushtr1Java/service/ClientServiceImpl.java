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


    public List<ClientAccountDTO> getTheMostRecentClientAccount(){
        return clientRepository.findAll()//kthen nje list te te gjith clienteve
                .stream()
                .map(this::convertEntityToDto)
                .collect(Collectors.toList());

    }

    private ClientAccountDTO convertEntityToDto(Client client){
        ClientAccountDTO clientAccountDTO= new ClientAccountDTO();

            clientAccountDTO.setClient_number(client.getClient_number());
            clientAccountDTO.setName(client.getName());
            for (int i = 0; i < client.getAccounts().size(); i++){
            clientAccountDTO.setAcc_number(client.getAccounts().get(i).getAcc_number());
            clientAccountDTO.setBranch_code(client.getAccounts().get(i).getBranch_code());
            clientAccountDTO.setAmount(client.getAccounts().get(i).getAmount());
            clientAccountDTO.setCcy(client.getAccounts().get(i).getCcy());
        }

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
            clientRepository.save(clientUpdate);
            return clientUpdate;
        }
        else {
            throw new ResourceNotFoundException("Record not found wit id: "+client.getClient_number());
        }
    }

    @Override
    public List<Client> getAllClient() {
        ClientAccountDTO clientAccountDTO= new ClientAccountDTO();

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
