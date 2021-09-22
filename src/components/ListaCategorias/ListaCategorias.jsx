import React, { Component } from 'react';

import "./style.css"

class ListaCategorias extends Component {

    _handleCriarCategoria(e){
        if(e.key === "Enter"){
            console.log("Adicionar categoria")
        }
    }

    render() {
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    <li className="lista-categorias_item">Categorias</li>
                </ul>
                <input
                    className="lista-categorias_input"
                    type="text"
                    placeholder="Nova categoria"
                    onKeyUp={this._handleCriarCategoria}
                />
            </section>
        );
    }
}

export default ListaCategorias;