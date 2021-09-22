import React, { Component } from "react";
import Formulario from "./components/Formulario";
import ListaDeNotas from "./components/ListaDeNotas";
import ListaCategorias from "./components/ListaCategorias"

import "./assets/App.css";
import './assets/index.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
      categorias: [],
    };
  }

  criarNota(titulo, texto) {
    let dados = { titulo, texto };
    let novoArrayNotas = [...this.state.notas, dados];
    let novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado);
  }

  deletarNota(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({
      notas: arrayNotas,
    });
  }

  render() {
    return (
      <section className="conteudo">
        <Formulario submitNota={this.criarNota.bind(this)} />
        <div className="conteudo-lista">
          <ListaCategorias />
          <ListaDeNotas
            deletarNota={this.deletarNota.bind(this)}
            listarNota={this.state.notas}
          />
        </div>
      </section>
    );
  }
}

export default App;
