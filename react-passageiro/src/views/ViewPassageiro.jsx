import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

export default function ViewPassageiro() {

  const { id } = useParams();

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    carregaPassageiro();
  }, [])

  const carregaPassageiro = async () => {
    const result = await axios.get(`http://localhost:8080/api/passageiro/${id}`,)
    setNome(result.data.primeiroNome)
    setSobrenome(result.data.ultimoNome)
    setEmail(result.data.email)
  }

  return (
    <div>
      <div className='container'>
        <div className="row">
          <div className="col-md-6 offset-md-3 border roundedp-4 mt-2 shadow">
            <h2 className="text-center">Atualizar Passageiros</h2>
            <div className="card">
              <div className="card text-center">
                <div className="card-header">
                  ID: {id}
                </div>
                <div className="cardbody">
                  <p className="card-title"><b>Nome: </b> {nome} </p>
                  <p className="card-title"><b>Sobrenome: </b> {sobrenome} </p>
                  <p className="card-title"><b>Email: </b> {email} </p>
                  <Link to="/home" type="button" className="btn btn-outline-success">
                    Voltar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
