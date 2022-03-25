import React from "react";

function Questao01(props) {
    return (
        <div className="Questao01">
            <h1>Questao 01 com as alteração para a Questão 03</h1>
            <h2>Nome: {props.name}</h2>
            <h2>Curso: {props.course}</h2>
            <h2>Cidade de origem: {props.homeCity}</h2>
        </div>
    );
}

// const Questao01 = () => {
//     return (
//         <div className="Questao01_2">
//             <h1>Questão 01</h1>
//             <h2>Nome: Ludmila Martins de Sousa</h2>
//             <h2>Curso: Psicologia</h2>
//             <h2>Cidade de origem: Quixeramobim</h2>
//         </div> 
//     );
// }

export default Questao01;