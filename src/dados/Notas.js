export default class ArrayNotas {
    constructor() {
        this.notas = [];
        this._inscritos = [];
    }

    inscrever(funcao){
        this._inscritos.push(funcao);
        console.log(this._inscritos)
    }

    notificar(){
        this._inscritos.forEach(funcao => funcao(this.notas));
    }

    criarNota(categoria, titulo, texto) {
        let novaNota = new Nota(categoria, titulo, texto);
        this.notas.push(novaNota);
        this.notificar();
    }

    deletarNota(indice){
        this.notas.splice(indice, 1);
        this.notificar();
    }
}

class Nota {
    constructor(titulo, texto, categoria) {
        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria;
    }
}