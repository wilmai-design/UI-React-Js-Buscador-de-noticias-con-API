import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {

  // definir la categoria y noticias
  const [categoria, guardarCategoria] = useState('');

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `
      https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=c9aa1a7c0e054c16a94c6fc8fe571866`

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      console.log(noticias);
      
    }
    consultarAPI();
  }, [categoria]);

  return (
    <Fragment>
      <Header 
        titulo='Buscador de Noticias'
      />

      <div className="container white">
        <Formulario 
          guardarCategoria={guardarCategoria}
        />   
      </div>
    </Fragment>
  );
}

export default App;
