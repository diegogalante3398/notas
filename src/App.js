import React, { Component } from "react";
import Formulario from "./components/Formulario";
import ListaDeNotas from "./components/ListaDeNotas";
import "./assets/App.css";
import './assets/index.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
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

  render() {
    return (
      <section className="conteudo">
        <Formulario submitNota={this.criarNota.bind(this)} />
        <ListaDeNotas listarNota={this.state.notas} />
      </section>
    );
  }
}

export default App;
