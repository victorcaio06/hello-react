import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, {Component} from "react";
import Questao02 from "./Questao02";

class Questao04 extends Component {
    render() {
        return(
            <div className="Questao04">
                <h1>Questão 04</h1>
                <Questao02 name="Eduardo" course="Informática" homeCity="Quixeramobim"/>
            </div>
        );
    };
}

export default Questao04;