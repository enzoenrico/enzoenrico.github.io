import "./css/Projects.css"
import foto from "../resources/foto.jpg"
function Projects() {
    return (
        <div className="projects-main">
            <h1 className="project-text">Projetos</h1>
            <div className="scroller">
                <div className="projects-scroller">
                    <div className="img-project">
                        <img src={foto} />
                    </div>
                    <div className="text">
                        <b>Umirror</b> <br></br>
                        Non consectetur ullamco magna cupidatat ea nostrud. Do magna et amet ex eiusmod et magna et enim non ex laborum. Labore quis do officia ex voluptate aliqua eu duis deserunt consectetur pariatur aliqua nulla. Nisi occaecat occaecat ipsum labore ad laboris sint voluptate Lorem aliqua eu magna. 
                    </div>
                </div>
                <div className="projects-scroller">
                    <div className="img-project">
                        <img src={foto} />
                    </div>
                    <div className="text">
                        <b>Github achar algo</b> <br></br>
                        Non consectetur ullamco magna cupidatat ea nostrud. Do magna et amet ex eiusmod et magna et enim non ex laborum. Labore quis do officia ex voluptate aliqua eu duis deserunt consectetur pariatur aliqua nulla. Nisi occaecat occaecat ipsum labore ad laboris sint voluptate Lorem aliqua eu magna.
                    </div>
                </div>
                <div className="projects-scroller">
                    <div className="img-project">
                        <img src={foto} />
                    </div>
                    <div className="text">
                        <b>Portifolio</b> <br></br>
                        Non consectetur ullamco magna cupidatat ea nostrud. Do magna et amet ex eiusmod et magna et enim non ex laborum. Labore quis do officia ex voluptate aliqua eu duis deserunt consectetur pariatur aliqua nulla. Nisi occaecat occaecat ipsum labore ad laboris sint voluptate Lorem aliqua eu magna. 
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects;