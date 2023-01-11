import "./css/Projects.css"
import foto from "../resources/foto.jpg"
import umirror from "../resources/umirror-img.png"
import startpage from "../resources/startpage-img.png"
import portif from "../resources/linux-server.png"


function Projects() {
    return (
        <div className="projects-main" id="projects">
            <h1 className="project-text">Projetos</h1>
            <div className="scroller">
                <div className="projects-scroller">
                    <div className="img-project">
                        <a href="https://linktr.ee/umirror">
                            <img src={umirror} />
                        </a>
                    </div>
                    <div className="text">
                        <b className="proj-title">Umirror</b> <br></br>
                        O espelho uMirror foi um projeto realizado como TCC para o 3 ano do ensino médio TecPuc. O projeto se trata de um espelho com funções de reconhecimento facial e algoritimos para reconhecimento emocional, com os dados obtidos pelo espelho, recomendações são feitas para melhorar o dia do usuário.
                    </div>
                </div>
                <div className="projects-scroller">
                    <div className="img-project">
                        <a href="https://github.com/enzoenrico/startpage">
                            <img src={startpage} />
                        </a>
                    </div>
                    <div className="text">
                        <b className="proj-title">Landing page</b> <br></br>
                        Projeto realizado para o estudo de estruturação web. Utilizando puramente HTML, CSS e Javascript, o projeto possui bookmarks uteis, design responsivo e search engine rapidamente acessivel
                    </div>
                </div>
                <div className="projects-scroller">
                    <div className="img-project">
                        <a href="#">
                            <img src={portif} />
                        </a>
                    </div>
                    <div className="text">
                        <b className="proj-title">Servidores Linux</b> <br></br>
                        Criação e manutenção de servidores linux, utilizando e configurando maquinas locais em sistemas NAS, configurando servidores utilizando AWS e configurando ambientes virtuais em Docker
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects;