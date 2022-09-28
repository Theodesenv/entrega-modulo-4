package com.cadastro.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cadastro.exception.ResourceNotFoundException;
import com.cadastro.model.Passageiro;
import com.cadastro.repositores.PassageiroRepository;
import com.cadastro.service.PassageiroService;

@Service
public class PassageiroServiceImpl implements PassageiroService {

	@Autowired
	private PassageiroRepository passageiroRepository;
		
	@Override
	public Passageiro savePassageiro(Passageiro passageiro) {
		return passageiroRepository.save(passageiro);
	}
	
	@Override
	public List<Passageiro> getAllPassageiro(){
		return passageiroRepository.findAll();
	}
	
	@Override
	public Passageiro getPassageiroById(long id) {
		return passageiroRepository.findById(id).orElseThrow(()-> 
				new ResourceNotFoundException("Passageiro", "id", id));		
	}
	
	@Override
	public Passageiro updatePassageiro(Passageiro passageiro, long id) {
		
		Passageiro passageiroExistente = passageiroRepository.findById(id).orElseThrow(
				()  -> new ResourceNotFoundException("Passageiro", "id", id));
		
		passageiroExistente.setPrimeiroNome(passageiro.getPrimeiroNome());
		passageiroExistente.setUltimoNome(passageiro.getUltimoNome());
		passageiroExistente.setEmail(passageiro.getEmail());
		
		passageiroRepository.save(passageiroExistente);
		return passageiroExistente;
	}
	
	@Override
	public void deletePassageiro(long id) {
		passageiroRepository.findById(id).orElseThrow(() -> 
				new ResourceNotFoundException("Passageiro", "id", id));
		
		passageiroRepository.deleteById(id);
	}
}
