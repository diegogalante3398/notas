import React, { Component } from "react";
import Formulario from "./components/Formulario";
import ListaDeNotas from "./components/ListaDeNotas";
import ListaCategorias from "./components/ListaCategorias"

import "./assets/App.css";
import './assets/index.css';

import Categorias from "./dados/Categorias";
import ArrayNotas from "./dados/Notas";

class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayNotas();
  }

  render() {
    return (
      <section className="conteudo">
        <Formulario
          categorias={this.categorias}
          criarNota={this.notas.criarNota.bind(this.notas)}
        />

        <div className="conteudo-lista">
          <ListaCategorias
            criarCategoria={this.categorias.criarCategoria.bind(this.categorias)}
            categorias={this.categorias}
          />

          <ListaDeNotas
            deletarNota={this.notas.deletarNota.bind(this.notas)}
            arrayNotas={this.notas}
          />
        </div>
      </section>
    );
  }
}

export default App;
