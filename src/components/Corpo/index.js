import React from "react";
import "./Corpo.css"
import Avisos from "./componentsCorpo/CardAvisos";
import Cabecalho from "../Cabecalho/Cabecalho";
import Rodape from "../Rodape/Rodape";

function index() {
    //======pegando a data do sistema=====//
    var data = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();
    const dataAtual = dia + '/' + mes + '/' + ano;

    return (
        <>
            <Cabecalho/>
            <div className="corpo">
                <div className="titulo">
                    <h1>Ciarama Fazendas News</h1>
                </div>
                <div className="center">
                    <div className="data">
                        <p>Data: {dataAtual} </p>
                    </div>
                    <div className="quadro-de-avisos">
                        <h2>Mural de avisos</h2>
                        <div className="avisos">
                            <Avisos />
                            <Avisos />
                            <Avisos />
                            <Avisos />
                            <Avisos />
                        </div>
                    </div>
                </div>
            </div>
            <Rodape />
        </>
    );
}

export default index;