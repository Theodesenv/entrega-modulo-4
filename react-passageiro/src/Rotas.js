import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Navbar from './components/Navbar';
import Home from './views/Home';
import AddPassageiro from './views/AddPassageiro';
import EditPassageiro from './views/EditPassageiro';
import ViewPassageiro from './views/ViewPassageiro';


export default function Rotas() {
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/home" element ={<Home />}/>
            <Route path="/add" element ={<AddPassageiro />}/>
            <Route path="/edit/:id" element ={<EditPassageiro />}/>
            <Route path="/view/:id" element ={<ViewPassageiro />}/>
            <Route path="*" element ={<h1>Página não encontrada.</h1> }/>
        </Routes>
    </Router>
  )
}
