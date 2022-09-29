import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";

export default function Home() {

  const [passageiro, setPassageiro] = useState([]);

  const listarPassageiro = async () => {
    try {
      await axios.get("http://localhost:8080/api/passageiro")
        .then((response) => {
          setPassageiro(response.data)
        })
    } catch (erro) {
      alert(erro.message);

    }
  };

  useEffect(() => {
    listarPassageiro();
  }, [])

  //Deletar
  
  const {id} = useParams();

  const deletePassageiro = async (id) =>{
    try{
      await axios.delete(`http://localhost:8080/api/passageiro/${id}`)
      .then((response) => {
        alert('Passageiro excluido.')
        listarPassageiro();
      })
    } catch (erro) {
      alert(erro.message)
    }
  }


  return (
    <div className="container">
      <div className="py-4">
        <table className="table table-striped border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Sobrenome</th>
              <th scope="col">Email</th>
              <th scope="col"> - </th>
            </tr>
          </thead>
          <tbody>
            {passageiro.map((passageiro, key) => (
              <tr>
                <th scope="row" key={key}>{key + 1}</th>
                <td>{passageiro.primeiroNome}</td>
                <td>{passageiro.ultimoNome}</td>
                <td>{passageiro.email}</td>
                <td>
                  <Link to={`/view/${passageiro.id}`} className="btn btn-success mx-2">
                    Ver
                  </Link>
                  <Link to={`/edit/${passageiro.id}`} className="btn btn-success mx-2">
                    Editar
                  </Link>
                  <button className="btn btn-danger mx-2" onClick={() => deletePassageiro(passageiro.id)}>
                    Excluir
                  </button>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>

    </div>
  )
}
