// App.js
import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { searchCepRequest, searchCepSuccess, searchCepFailure } from './actions';
import './style.css';
import api from './services/api';

function App() {
  const [input, setInput] = useState('');
  const cep = useSelector(state => state.cep);
  const dispatch = useDispatch();

  const handleSearch = async () => {
    if(input === ''){
      alert("Preencha com algum CEP!")
      return;
    }

    dispatch(searchCepRequest());

    try {
      const response = await api.get(`${input}/json`);
      dispatch(searchCepSuccess(response.data));
      setInput("");
    } catch (error) {
      dispatch(searchCepFailure());
      alert("Ops! erro ao buscar");
      setInput("");
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input 
          type="text"
          placeholder="Digite seu cep..."
          value={input}
          onChange={(e) => setInput(e.target.value) }
        />
        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#000"/>
        </button>
      </div>

      {cep && Object.keys(cep).length > 0 && !cep.error && (
         <main className="main" >
            <h2>CEP: {cep.cep}</h2>
            <span>{cep.logradouro}</span>
            <span>{cep.bairro}</span>
            <span>{cep.localidade} - {cep.uf}</span>
         </main>
      )}
      {cep.error && (
         <div className="error">Ops! Houve um erro ao buscar o CEP.</div>
      )}
    </div>
  );
}

export default App;