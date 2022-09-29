import React, { useState } from 'react';
import { useNavigate,Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function AddPassageiro() {

  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');

  const salvar = async (e) => {
    e.preventDefault();
    console.log(nome, sobrenome, email);
    await axios.post("http://localhost:8080/api/passageiro", {
      primeiroNome: nome,
      ultimoNome: sobrenome,
      email: email
    }).then((result) => {
      alert("passageiro adicionado.")
      navigate("/home")
    }).cath((erro) => {
      console.log(erro);
    })
  }

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-6 offset-md-3 border roundedp-4 mt-2 shadow">
          <h2 className="text-center">Registro de Passageiros</h2>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Nome</label>
              <input type="text" class="form-control" id="exampleInputNome1"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />

            </div>
            <div class="mb-3">
              <label for="exampleInputSobrenome1" class="form-label">Sobrenome</label>
              <input type="text" class="form-control" id="exampleInputPassword1"
                value={sobrenome}
                onChange={(e) => setSobrenome(e.target.value)}

              />
            </div>
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}

                />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
            </form>


            <Link to="/home" type="submit" class="btn btn-outline-success " onClick={salvar}>Salvar</Link>
            <button type="submit" class="btn btn-outline-danger mx-2">Cancelar</button>
          </form>
        </div>
      </div>
    </div>
  )
}
