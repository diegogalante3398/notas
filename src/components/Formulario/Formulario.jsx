import React from "react";
import { Component } from "react";
import "./style.css"

class Formulario extends Component {
    constructor(props) {
        super(props);

        this.categoria = "";
        this.titulo = "";
        this.texto = "";

        this.state = {
            categorias: [],
        };
    }

    componentDidMount() {
        this.props.categorias.inscrever(this._novasCategorias.bind(this));
    }

    _novasCategorias(categoria){
        this.setState({...this.setState, categorias: categoria});
    }

    _handleMudarCategoria(evento) {
        evento.stopPropagation();
        this.categoria = evento.target.value;
    }

    _handleMudarTitulo(evento) {
        evento.stopPropagation();
        this.titulo = evento.target.value;
    }

    _handleMudarTexto(evento) {
        evento.stopPropagation();
        this.texto = evento.target.value;
    }

    _onSubmit(evento) {
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.categoria, this.titulo, this.texto);
    }

    render() {
        return (
            <form
                className="form-cadastro"
                onSubmit={this._onSubmit.bind(this)}
            >
                <select
                    className="form-cadastro_categorias"
                    name="cat"
                    onChange={this._handleMudarCategoria.bind(this)}
                >
                    {
                        this.state.categorias.map((categoria, index) => {
                            return <option key={index} value={categoria}>{categoria}</option>
                        })
                    }
                </select>
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