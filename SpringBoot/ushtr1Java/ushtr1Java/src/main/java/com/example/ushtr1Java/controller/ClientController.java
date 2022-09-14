package com.example.ushtr1Java.controller;

import com.example.ushtr1Java.model.Client;
import com.example.ushtr1Java.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.ListIterator;

@RestController
public class ClientController {

    @Autowired
    private ClientService clientService;

    @GetMapping("/clients")
   public ResponseEntity<List<Client>> getAllClient(){
        return ResponseEntity.ok().body(clientService.getAllClient());
    }

    @GetMapping("/clients/{id}")
    public ResponseEntity<Client> getClientById(@PathVariable long id){
        return ResponseEntity.ok().body(clientService.getClientById(id));
    }

    @PostMapping("/clients")
    public  ResponseEntity<Client> createClient(@RequestBody Client  client){
      return  ResponseEntity.ok().body(this.clientService.createClient(client));

    }

    @PutMapping("/clients/{id}")
    public ResponseEntity<Client> updateClient(@PathVariable long id, @RequestBody Client client){

        client.setId(id);
        return  ResponseEntity.ok().body(this.clientService.updateClient(client));

    }

    @DeleteMapping("/clients/{id}")
    public HttpStatus deleteProduct(@PathVariable long id){
         this.clientService.deleteClient(id);
        return HttpStatus.OK;
    }
}
