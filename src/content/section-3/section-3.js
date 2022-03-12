import React from "react";
import Button from "../../components/button/button";
import '../section-3/section-3.css'

function Section2 () {

    return (
        <div className="section-3">
            <h2>Contabilidade </h2>
            <p>Gestão Contábil em parceria com a Renovar Contabilidade</p>
    
            <div>
                <h2>Gestão</h2>
                <p>Estamos preparados para munir os empreendedores e gestores com relatórios e indicadores de desempenho contábeis e financeiros que possibilitem análises reflexivas sobre o desempenho do seu negócio, facilitando tomadas de decisões, buscando a maximização dos resultados, minimização dos custos e conquistas de novos mercados.</p>
                <Button>Leia mais</Button>
            </div>

            <div>
                <h2>Regularização de Empresas</h2>
                <ul>
                    <li>Abertura, Baixa e regularização Empresarial.</li>
                    <li>Apoio aos Micro Empreendedores Individuais.</li>
                    <li>Gestão de Folha de Pagamento de funcionários</li>
                    <li>Notas Fiscais</li>
                    <li>Alvarás e Licenças</li>
                    <li>Imposto de Renda Pessoa Física</li>
                </ul>
                <Button>Leia mais</Button>
            </div>
        </div>
    ); 
}

export default Section2;