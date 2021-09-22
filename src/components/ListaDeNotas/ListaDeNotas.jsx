import React from "react";
import { Component } from "react";
import CardNota from "../CardNota";
import "./style.css"

class ListaDeNotas extends Component {
    render() {
        return (
            <ul className="lista-notas">
                {
                    /* Adicionando "Array of" para repetição dos elemento "li" */
                    this.props.listarNota
                        .map((nota, index) => {
                            return (
                                <li className="lista-notas_item" key={index}>
                                    <CardNota
                                        index={index}
                                        deletarNota={this.props.deletarNota}
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