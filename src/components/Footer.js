import "./css/Footer.css"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa"

function Footer() {
    return (
        <div className="footer-main">

            <div className="footer-icons">
                <a href="https://github.com/enzoenrico" className="icons"> <FaGithub /></a>

                <a href="https://www.linkedin.com/in/enzo-enrico-a71771242/" className="icons">
                    <FaLinkedin />
                </a>
                
                <a href="https://twitter.com/ky0uko__" className="icons">
                    <FaTwitter />
                </a>
            </div>

            <h1 className="footer-text">
                Enzo Enrico 2023
            </h1>

        </div>
    )
}

export default Footer;
