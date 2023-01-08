import "./css/Header.css"

import pdf from "../resources/Curriculum2.pdf"

function Header(){
    return(
        <div className="header-main">
            <p className="redirect">Home</p>
            {/* <p className="redirect">Quem sou eu</p> */}
            <p className="redirect">Projetos</p>
            <p className="redirect">Sobre mim</p>
            <p className="redirect">Contato</p>
            <p className="redirect"><a href={pdf}>Curriculum </a> </p>
            {/* <p className="redirec">P</p> */}
        </div>
    )
}

export default Header;