package com.cadastro.repositores;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cadastro.model.Passageiro;

@Repository
public interface PassageiroRepository extends JpaRepository<Passageiro, Long>{

}
