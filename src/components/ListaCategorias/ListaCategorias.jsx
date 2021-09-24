import React, { Component } from 'react';

import "./style.css"

class ListaCategorias extends Component {

    constructor(){
        super();

        this.state = {
            categorias:[]
        };
    }

    componentDidMount(){
        this.props.categorias.inscrever(this._novaCategoria.bind(this));
    }

    _novaCategoria(categoria){
        this.setState({...this.state, categorias: categoria});
    }

    _handleInput(e) {
        if (e.key === "Enter") {
            let novaCategoria = e.target.value;
            this.props.criarCategoria(novaCategoria);
        }
    }

    render() {
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {
                        this.state.categorias
                            .map((categoria, index) => {
                                return <li key={index} className="lista-categorias_item">{categoria}</li>
                            })
                    }
                </ul>
                <input
                    className="lista-categorias_input"
                    type="text"
                    placeholder="Nova categoria"
                    onKeyUp={this._handleInput.bind(this)}
                />
            </section>
        );
    }
}

export default ListaCategorias;