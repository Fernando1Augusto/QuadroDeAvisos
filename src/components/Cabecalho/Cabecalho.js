import React from "react";
import { Link } from "react-scroll";
import logo from "./componentsCabecalho/imgs/logo_trans_branca.png";
import "./componentsCabecalho/style/cabecalho.css";

function Cabecalho() {

    return (
        <header>
            <div className="sombra">
            </div>
            <div className="banner-conteudo">
                <div className="cabecalho">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                </div>
            </div>
           
        </header>
    )
}

export default Cabecalho;