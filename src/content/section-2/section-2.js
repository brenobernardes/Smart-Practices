import React from "react";
import Button from "../../components/button/button";
import '../section-2/section-2.css'

function Section2 () {

    return (
        <div className="section-2">
            <h2>BPO Financeiro </h2>
            <p>Business Process Outsourcing (Terceirização de Processos de Negócio)</p>
    
            <div>
                <h2>O que é BPO Financeiro</h2>
                <p>BPO Financeiro é uma solução de terceirização da gestão financeira para empresas. A sigla BPO vem do inglês Business Process Outsourcing, ou Terceirização de Processos de Negócio: uma tendência global de transferir áreas administrativas para empresas terceiras.</p>
                <Button>Leia mais</Button>
            </div>

            <div>
                <h2>...</h2>
                <p>É comum que os empreendedores tenham dificuldades com a gestão financeira e fiscal dos negócios. O problema é que essas falhas tendem a prejudicar o crescimento sustentável da empresa. Nesse momento, torna-se importante saber o que é o BPO financeiro e seus benefícios.</p>
                <Button>Leia mais</Button>
            </div>
        </div>
    ); 
}

export default Section2;