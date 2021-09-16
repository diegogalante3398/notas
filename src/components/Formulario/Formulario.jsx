import React from "react";
import { Component } from "react";
import "./style.css"

class Formulario extends Component {
    constructor(props){
        super(props);
        this.titulo = "";
        this.texto = "";
    }

    _handleMudarTitulo(evento){
        evento.stopPropagation();
        this.titulo = evento.target.value;
    }

    _handleMudarTexto(evento){
        evento.stopPropagation();
        this.texto = evento.target.value;
    }

    _criarNota(evento){
        evento.preventDefault();
        evento.stopPropagation();
        this.props.submitNota(this.titulo, this.texto);
    }

    render() {
        return (
            <form 
            className="form-cadastro"
            onSubmit={this._criarNota.bind(this)}
            >
                <input
                    type="text"
                    placeholder="Título"
                    className="form-cadastro_input"
                    onChange={this._handleMudarTitulo.bind(this)}
                />
                <textarea
                    rows="15"
                    placeholder="Escreva sua nota..."
                    className="form-cadastro_input"
                    onChange={this._handleMudarTexto.bind(this)}
                ></textarea>
                <button className="form-cadastro_input form-cadastro_submit">Criar Nota</button>
            </form>
        )
    }
}

export default Formulario;