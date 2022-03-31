import React from "react";
import './content.css';
import BackgroundImage from "../../images/logo_laranja.svg";
import {Button} from "../../components/button/button";

function Content () {
    return  (
        <div className="mainContent" style = {{ backgroundImage: `url(${BackgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover"
        }}>
            <h2 className="sectionTitle">Segmentos</h2>
            
            <ul>
                <li>
                    <h2>InfoProdutor e Afiliado</h2>
                    <p>Mantenha seu negócio digital legalizado e evite problemas com o fisco. Atendemos todas as plataformas digitais do mercado</p>
                    <Button>Saiba Mais</Button>
                </li>
                <li>
                    <h2>Contabilidade para E-commerce</h2>
                    <p>Se você tem uma loja de e-commerce ou atua com dropshipping mantenha suas vendas na internet legalizadas com nosso serviço de contabilidade</p>
                    <Button>Saiba Mais</Button>
                </li>
                <li>
                    <h2>Comércio de Rua</h2>
                    <p>Se você tem sua empresa, seja ela um restaurante, loja de roupas, mercados, depósito, loja de bebidas, padarias, enfim, seja qual for seu comércio, podemos lhe auxiliar com nossos serviços Contábeis e Financeiros. </p>
                    <Button>Saiba Mais</Button>
                </li>
                <li>
                    <h2>Digital Influencer</h2>
                    <p>Se você é um Digital Influencer, YouTuber e recebe valores pelos seus serviços, lhe ajudamos a legitimar essas operação e pagar o imposto devido da melhor forma.</p>
                    <Button>Saiba Mais</Button>
                </li>
                <li>
                    <h2>Prestadores de Serviços</h2>
                    <p>Se você é um Prestador de Serviços, regularize sua empresa conosco e tenha a opção de emitir notas fiscais dos seus serviços prestados</p>
                    <Button>Saiba Mais</Button>
                </li>
                <li>
                    <h2>Contabilidade para Serviços Online</h2>
                    <p>Você que oferece serviços online através de plataformas digitais tais como a Hotmart ou Eduzz você precisa ter o seu CNPJ para receber seus rendimentos de forma legal.</p>
                    <Button>Saiba Mais</Button>
                </li>
            </ul>
        </div>
    );
}

export default Content;