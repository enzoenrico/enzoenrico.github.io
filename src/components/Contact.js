import React from 'react'
import "./css/Contato.css"

import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"

function Contact() {

  return (
    <div className="contact-wrapper" id='contact'>
      <div className='contact-message'>
        Caso tenha alguma ideia, projeto ou apenas queira dar um oi, sinta-se livre para me enviar uma mensagem com o formulário ao lado! <br />
        Não se esqueca de inserir seu nome e email para que eu possa lhe retornar a mensagem!<br /><br />
        Se preferir, me mande uma mensagem em uma de minhas redes!:
        <div className='icons-contact'>
          <a href="https://github.com/enzoenrico" className="icons">
            <FaGithub />
          </a>
          <a href="https://twitter.com/ky0uko__" className="icons">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/enzo-enrico-a71771242/" className="icons">
            <FaLinkedin />
          </a>
        </div>
      </div>




      <div className='message-form'>
        <form >
          <h3>
            Entre em contato!
          </h3>

          <input type={"text"} className="input-name" placeholder='Seu nome' required />
          <input type={"email"} className="input-email" placeholder='Seu Email' required />
          <textarea className="input-message" rows={4} placeholder='Sua mensagem' required />
          <button type='submit'>Enviar mensagem</button>



        </form>
      </div>
    </div >
  )
}
export default Contact