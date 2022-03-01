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
                        <a>Whatsapp</a>
                    </li>

                </ul>

            </div>

        </div>
    );
}

export default Header;