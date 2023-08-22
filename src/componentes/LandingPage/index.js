import React, { useState } from "react";
import './index.css';

export default function PaginaInicial() {

    const [ehTemaEscuro, setEhTemaEscuro] = useState(false);
    const alterarTema = () => {
        setEhTemaEscuro(!ehTemaEscuro)
    }

    return (
        <div className="container">
            <div className={ehTemaEscuro ? 'modo-escuro' : 'modo-claro'}>
                <div className="header limitar-cessao">
                    <img src={'assets/barbearia-logo.png'} alt="logo" className="img-topo" />
                    <button className={ehTemaEscuro ? 'botao-topo2' : 'botao-topo1'} onClick={alterarTema}>
                        <img src={ehTemaEscuro ? `assets/sun.png` : `assets/moon.png`} alt="img-tema" className="img-botao-topo" />
                        {ehTemaEscuro ? `Light` : `Dark`}
                    </button>
                </div>
                <div className="section1"></div>
                <div className="section2 limitar-cessao">
                    <h1>Bem-vindo a Barber Shop</h1>
                    <p className="paragrafo-um">Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.
                    </p>
                    <p className='paragrafo-dois'>
                        Nossos serviços são dedicados ao seu sucesso pessoal.
                        Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo.
                        Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.
                    </p>
                    <p className="assinatura">
                        J. Dias
                    </p>
                </div>
            </div>
        </div>
    );
}