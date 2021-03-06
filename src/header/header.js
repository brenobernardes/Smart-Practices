import React from "react";
import logo from '../images/logo_laranja.svg';
import '../header/header.css';
import { Button } from "../components/button/button";
import BackgroundImage from '../images/logo_shade.svg';

function Header () {

    return (
        <div className="header" style = {{ backgroundImage: `url(${BackgroundImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover"
            }} >

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
                        <Button>Whatsapp</Button>
                    </li>

                </ul>

            </div>

            <div className="headerBottom">
                <h1>Smart Practices</h1>
                <h2>Gestão Financeira e Contabilidade  para todos os tipos de Negócios</h2>
                <Button>Seja Nosso Cliente</Button>
            </div>

        </div>
    );
}

export default Header;