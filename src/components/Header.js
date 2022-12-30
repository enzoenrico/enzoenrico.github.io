import "./css/Header.css"
import { useRef } from "react";

function Header(){
    


    return(
        <div className="header-main">
            <p className="redirect">Home</p>
            {/* <p className="redirect">Quem sou eu</p> */}
            <p className="redirect">Projetos</p>
            <p className="redirect">Sobre mim</p>
            <p className="redirect">Contato</p>
            {/* <p className="redirec">P</p> */}
        </div>
    )
}

export default Header;