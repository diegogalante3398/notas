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

  criarNota(categoria, titulo, texto) {
    let dados = { categoria, titulo, texto };
    let novoArrayNotas = [...this.state.notas, dados];
    let novoEstado = {
      ...this.state,
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

  criarCategoria(novaCategoria) {
    let arrayCategorias = [...this.state.categorias, novaCategoria];
    let novoEstado = {
      ...this.state,
      categorias: arrayCategorias
    }
    this.setState(novoEstado);
  }

  render() {
    return (
      <section className="conteudo">
        <Formulario
          categorias={this.state.categorias}
          submitNota={this.criarNota.bind(this)}
        />

        <div className="conteudo-lista">
          <ListaCategorias
            criarCategoria={this.criarCategoria.bind(this)}
            categorias={this.state.categorias}
          />

          <ListaDeNotas
            deletarNota={this.deletarNota.bind(this)}
            notas={this.state.notas}
          />
        </div>
      </section>
    );
  }
}

export default App;
