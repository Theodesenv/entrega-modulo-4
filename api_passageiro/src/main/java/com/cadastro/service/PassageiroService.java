package com.cadastro.service;

import java.util.List;

import com.cadastro.model.Passageiro;

public interface PassageiroService {
	Passageiro savePassageiro(Passageiro passageiro);
	List<Passageiro> getAllPassageiro();
	Passageiro getPassageiroById(long id);
	Passageiro updatePassageiro(Passageiro passageiro, long id);
	void deletePassageiro (long id);

}
