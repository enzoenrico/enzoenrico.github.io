import React from 'react'
import "./css/Contato.css"

function Contact(){

  return (
    <div className="contact-wrapper" id='contact'>
      <div className='contact-message'>
        Caso tenha alguma ideia, projeto ou apenas queira dar um oi, sinta se livre para me enviar uma mensagem com o formulario ao lado! <br />
        Nao se esqueca de inserir seu nome e email para que eu possa lhe retornar a mensagem!
      </div>

      <div className='message-form'>
        <form >
          <h3>
            Entre em contato!
          </h3>

          <input type={"text"} className="input-name" placeholder='Seu nome' required />
          <input type={"email"} className="input-email" placeholder='Seu Email' required />
          <textarea className="input-message" rows={4} placeholder='Sua mensagem' required/>
          <button type='submit'>Enviar mensagem</button>



        </form>
      </div>
    </div>
  )
}
export default Contact