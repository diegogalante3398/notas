import React, { Component } from 'react';

import "./style.css"

class ListaCategorias extends Component {

    _handleNovaCategoria(e) {
        if (e.key === "Enter") {
            let valorCategoria = e.target.value;
            this.props.criarCategoria(valorCategoria);
        }
    }

    render() {
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {
                        this.props.categorias
                            .map((categoria, index) => {
                                return <li key={index} className="lista-categorias_item">{categoria}</li>
                            })
                    }
                </ul>
                <input
                    className="lista-categorias_input"
                    type="text"
                    placeholder="Nova categoria"
                    onKeyUp={this._handleNovaCategoria.bind(this)}
                />
            </section>
        );
    }
}

export default ListaCategorias;