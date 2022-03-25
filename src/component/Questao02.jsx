import React, {Component} from "react";


class Questao02 extends Component {
    render() {
        return(
            <div className = "Questao02">
                <h1>Questao 02 com as alteração para a Questão 04</h1>
                <h2>Nome: {this.props.name}</h2>
                <h2>Curso: {this.props.course}</h2>
                <h2>Cidade de origem: {this.props.homeCity}</h2>
            </div>
        );
    }
}


/*class Questao02 extends Component {
    
    constructor(props){
        super(props)
    }

    render() {
        const {nome,curso,cidade} = this.props   
        return (
            <div>
                <h2>Nome: {nome}</h2>
                <h2>Curso: {curso}</h2>
                <h2>Nome: {cidade}</h2>
            </div>
        )
    }
}*/

export default Questao02;