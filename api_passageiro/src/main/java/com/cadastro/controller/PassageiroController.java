package com.cadastro.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cadastro.model.Passageiro;
import com.cadastro.serviceImpl.PassageiroServiceImpl;

@RestController
@CrossOrigin("*")
@RequestMapping("api/passageiro")
public class PassageiroController {

	@Autowired
	private PassageiroServiceImpl service;
	
	@GetMapping ("/home")
	public String hello() {
		return "oi";
	}
	@GetMapping
	public ResponseEntity<List<Passageiro>> findAll() {
		List<Passageiro> passageiro = service.getAllPassageiro();
		return ResponseEntity.ok().body(passageiro);
	}
	//localhost:8080/api/passageiro/1
	@GetMapping("{id}")
	public ResponseEntity<Passageiro> getPassageiroById(@PathVariable("id") long PassageiroId){
		return new ResponseEntity<Passageiro>(service.getPassageiroById(PassageiroId), HttpStatus.OK);
	}
	
	//salvar
	//localhost:8080/api/passageiro/1
	@PostMapping
	public ResponseEntity<Passageiro> savePassageiro(@RequestBody Passageiro passageiro){
		return new ResponseEntity<Passageiro>(service.savePassageiro(passageiro), HttpStatus.CREATED);
	}
	
	//atualizar
	//localhost:8080/api/passageiro/1
	@PutMapping ("{id}") 
	public ResponseEntity<Passageiro> updatePassageiro(@PathVariable("id") long id, 
			@RequestBody Passageiro passageiro){
		return new ResponseEntity<Passageiro>(service.updatePassageiro(passageiro, id), HttpStatus.OK );
		
	}
	
	//Deletar
	@DeleteMapping("{id}")
	public ResponseEntity<String> deletePassageiro(@PathVariable("id") long id){
		service.deletePassageiro(id);
		
		return new ResponseEntity<String>("Passageiro deletado com sucesso.", HttpStatus.OK);
	}
}

