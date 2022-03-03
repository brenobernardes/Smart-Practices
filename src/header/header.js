import React from "react";
import logo from '../images/logo_laranja.svg';
import '../header/header.css';

function Header () {

    return (
        <div className="header">

            <div className="headerLogo">
                <img src={logo} alt= "Logo da Smart Practices Laranja" />
            </div>

            <div className="list">

                <ul>

                    <li>
                        <a>Início</a>
                    </li>

                    <li>
                        <a>Localização</a>
                    </li>

                    <li>
                        <a>Contate-nos</a>
                    </li>

                    <li>
                        <button><a>Whatsapp</a></button>
                    </li>

                </ul>

            </div>

            <div className="headerBottom">
                <h1>Smart Practices</h1>
                <h2>Gestão Financeira e Contabilidade  para todos os tipos de Negócios</h2>
                <button><a>Seja Nosso Cliente</a></button>
            </div>

        </div>
    );
}

export default Header;