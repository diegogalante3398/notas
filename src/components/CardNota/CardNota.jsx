import React, { Component } from 'react';
import "./style.css";

class CardNota extends Component {

    apagar(){
        const indice = this.props.index;
        this.props.deletarNota(indice);
    }

    render() {
        return (
            <section className="card-nota">
                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo">{this.props.tituloNota}</h3>
                    <i
                        className="fas fa-trash"
                        onClick={this.apagar.bind(this)}
                    ></i>
                </header>
                <p className="card-nota_texto">{this.props.textoNota}</p>
            </section>
        );
    }
}

export default CardNota;