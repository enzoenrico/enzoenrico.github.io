import "./css/About.css"

import { FaPython } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";


function About() {
    return (
        <div className="about-main" id="about">
            <h1 className="about-title">Sobre Mim</h1>
            <div className="about-info">

                <div className="about-text">
                    <p className="about-title-text">
                        Me chamo Enzo Enrico, tenho 17 anos e estudo programação e técnologia a mais de 4 anos. Acabei meu ensino médio técnico <a href="https://www.tecpuc.com.br" className="special"> @TECPUC</a> em 2022, e conquistei minha certificação de técnico em informação da técnologia
                    </p>
                    <p className="about-title-text"> 🧑‍🎓 Sou um desenvolvedor full-stack atualmente cursando Engenharia de Software.</p>
                    <p className="about-title-text">
                        🧑‍💻 Criador e fundador do projeto <a href="https://umirror.github.io">'uMirror'</a>.</p>
                    <p className="about-title-text">
                        🔓 Entusiasta de cybersegurança e devops.</p>
                    <p className="about-title-text">
                        🚀  Apoiador de software open source! .</p>


                </div>
                <div className="about-img">
                    <div className="skills-icons">
                        <div className="skill-indiv">
                            <FaPython className="icon-single" /> Anos de experiência em python com diversos projetos realizados
                        </div>
                        <div className="skill-indiv">
                            <FaNodeJs className="icon-single" /> Proficiencia em criacao de aplicacoes e servidores utilizando Node.js e seus frameworks
                        </div>
                        <div className="skill-indiv">
                            <FaLinux className="icon-single" /> Conhecimento e familiaridade em producao e manutenção de servidores e aplicações linux
                        </div>
                    </div>
                    {/* <img src={mePic} className="image-about" />
                    <img src={meGym} className="image-about" /> */}
                </div>
            </div>
        </div>
    )
}

export default About;