import React from "react";
import {Button} from "../../components/button/button";
import '../section-3/section-3.css'

function Section2 () {

    return (
        <div className="section-3">
            <h2>Contabilidade </h2>
            <p>Gestão Contábil em parceria com a Renovar Contabilidade</p>
    
            <ul>
                <li>        
                    <h2>Gestão</h2>
                    <p>Estamos preparados para munir os empreendedores e gestores com relatórios e indicadores de desempenho contábeis e financeiros que possibilitem análises reflexivas sobre o desempenho do seu negócio, facilitando tomadas de decisões, buscando a maximização dos resultados, minimização dos custos e conquistas de novos mercados.</p>
                    <Button>Leia mais</Button>
                </li>

                <li>
                    <h2>Regularização de Empresas</h2>
                    <p>Abertura, Baixa e regularização Empresarial</p>
                    <p>Apoio aos Micro Empreendedores Individuais</p>
                    <p>Gestão de Folha de Pagamento de funcionários</p>
                    <p>Notas Fiscais</p>
                    <p>Alvarás e Licenças</p>
                    <p>Imposto de Renda Pessoa Física</p>
                    <Button>Leia mais</Button>
                </li>
            </ul>
        </div>
    ); 
}

export default Section2;