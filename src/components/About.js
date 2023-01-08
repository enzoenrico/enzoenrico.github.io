import "./css/About.css"

import foto from "../resources/foto.jpg"

import { FaPython } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";


function About() {
    return (
        <div className="about-main">
            <h1 className="about-title">Sobre Mim</h1>
            <div className="about-info">
                <div className="about-text">
                    <p className="about-title-text"> 🧑‍🎓 Sou um desenvolvedor full-stack atualmente cursando Engenharia de Software.</p> 
                    <p className="about-title-text">
                    🧑‍💻 Criador e fundador do projeto 'uMirror'.</p>  
                

                    <div className="skills-icons">
                        <div className="skill-indiv">
                            <FaPython className="icon-single" /> Anos de experiencia em python com diversos projetos realizados
                        </div>
                        <div className="skill-indiv">
                            <FaNodeJs className="icon-single"/> Proficiencia em criacao de aplicacoes e servidores utilizando Node.js e seus frameworks
                        </div>
                        <div className="skill-indiv">
                            <FaLinux className="icon-single"/> Conhecimento e familiaridade em producao e manutencao de servidores e aplicacoes linux
                        </div>
                    </div>

                </div>
                <div className="about-img">
                    <img src={foto} className="image-about" />
                    {/* <img src={foto} className="image-about" /> */}
                </div>
            </div>
        </div>
    )
}

export default About;