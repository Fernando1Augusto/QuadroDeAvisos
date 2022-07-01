import React from "react";
import { MdLocationPin } from 'react-icons/md';
import "./rodape.css";

function Rodape() {
    return (
        <footer className="rodape">
            <p> Todos os direitos resevados a Ciarama Fazendas</p>
            <div className="rodape-endereco">
                <MdLocationPin size={20} color="white" />
                <span>Av. Brasil, 1895 - Centro, Ponta Porã - MS, 79904-698</span>
            </div>
        </footer>
    );

}

export default Rodape