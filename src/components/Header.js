import "./css/Header.css"

import { Link, animateScroll as scroll } from "react-scroll";

import pdf from "../resources/Curriculum2.pdf"

function Header() {
    return (
        <div className="header-main">
            <Link className="redirect" to="info" spy={true} smooth={true} offset={-10} duration={500}>Home</Link>

            <Link className="redirect" to="projects" spy={true} smooth={true} offset={-10} duration={500}> Projetos</Link>

            <Link className="redirect"
            to="about" spy={true} smooth={true} offset={-10} duration={500}>Sobre</Link>

            <Link className="redirect" to="contact" spy={true} smooth={true} offset={-10} duration={500}>Contato</Link>

            <p className="redirect"><a href={pdf}>Curriculum </a> </p>

        </div>

    )
}

export default Header;