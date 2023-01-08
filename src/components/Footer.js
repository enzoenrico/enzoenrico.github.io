import "./css/Footer.css"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {AiTwotoneMail} from "react-icons/ai"

function Footer() {
    return (
        <div className="footer-main">

            <div className="footer-icons">
                <p className="icon"> <FaGithub /></p>
                <p className="icon"><FaLinkedin /> </p>
                <p className="icon"> <AiTwotoneMail /> </p>
            </div>
            
            <h1 className="footer-text">
                Enzo Enrico 2023
            </h1>

        </div>
    )
}

export default Footer;
