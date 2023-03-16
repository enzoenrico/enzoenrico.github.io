import "./css/Info.css"
import foto from "../resources/foto.jpg"
import { FaGithub } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

function Info() {

    // const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // let interval = null;

    // document.querySelector(".affected").onmouseover = event => {
    //     let iteration = 0;

    //     clearInterval(interval);

    //     interval = setInterval(() => {
    //         event.target.innerText = event.target.innerText
    //             .split("")
    //             .map((letter, index) => {
    //                 if (index < iteration) {
    //                     return event.target.dataset.value[index];
    //                 }

    //                 return letters[Math.floor(Math.random() * 26)]
    //             })
    //             .join("");

    //         if (iteration >= event.target.dataset.value.length) {
    //             clearInterval(interval);
    //         }

    //         iteration += 1 / 3;
    //     }, 30);
    // }

    return (
        <div className="info-main" id="info">
            <div className="main-info">
                <div className="info-div">
                    <h1 className="name-div affected" data-value="~/ Enzo Enrico">
                        ~/ Enzo Enrico
                    </h1>
                    <h1 className="main-title affected" data-value = "~/ Estudante de Engenharia de Software">
                        ~/ Estudante de Engenharia de Software <a href="https://www.pucpr.br/cursos-graduacao/engenharia-de-software/" className="special">@PUCPR</a>
                    </h1>
                    <h1 className="icons-main">
                        <a href="https://github.com/enzoenrico" className="icons">
                            <FaGithub />
                        </a>
                        {/* <a href="https://twitter.com/ky0uko__" className="icons">
                            <FaTwitter />
                        </a> */}
                        <a href="https://www.linkedin.com/in/enzo-enrico-a71771242/" className="icons">
                            <FaLinkedin />
                        </a>
                    </h1>


                </div>
            </div>

            <div className="pic-div">
                {/* <img src={foto} /> */}

                <div className="pic-text">
                    ~👾 Sou um desenvolvedor full-stack, estudante e entusiasta de tecnologia. Atualmente cursando Engenharia de Software e aberto a oportunidades.

                </div>
            </div>

        </div>
    )
}

export default Info;