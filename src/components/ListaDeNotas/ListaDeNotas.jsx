import React from "react";
import { Component } from "react";
import CardNota from "../CardNota";
import "./style.css"

class ListaDeNotas extends Component {
    constructor() {
        super();

        this.state = {
            notas: [],
        };
    }

    componentDidMount() {
        this.props.arrayNotas.inscrever(this._novaNota.bind(this));
    }

    _novaNota(nota) {
        this.setState({...this.state, notas: nota});
    }

    render() {
        return (
            <ul className="lista-notas">
                {
                    /* Adicionando "Array of" para repetição dos elemento "li" */
                    this.state.notas
                        .map((nota, index) => {
                            return (
                                <li className="lista-notas_item" key={index}>
                                    <CardNota
                                        index={index}
                                        deletarNota={this.props.deletarNota}

                                        categoriaNota={nota.categoria}
                                        tituloNota={nota.titulo}
                                        textoNota={nota.texto}
                                    />
                                </li>
                            );
                        })
                }
            </ul>
        )
    }
}

export default ListaDeNotas;