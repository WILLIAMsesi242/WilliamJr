import { useState } from 'react'

import Mylink from './Mylinks'
import Mylink2 from './Mylinks2'

import '../components/Lindo.css'

function Contato() {

  const [texto, setTexto] = useState('')
  const [number, setNumber] = useState("")

  function Alerta() {
    if (texto !== "" && number !== "") {
      alert(`O seu Feedback: ${texto} e sua nota para ele é de ${number}`)
    } else {
      alert("Erro, seu Feedback está vazio ou nota ⚠")
    }
  }


  return (
    <div>

      <header >
        <h1>Contato</h1>
      </header>

      <section>
        <article className='artigo'>

          <h2>
            <p>Entre em contato conosco! <br />
          Via  <br />
          <Mylink /> ou<br /> <Mylink2 />
          </p>
          </h2>

        </article>

        <article className='artigo'>
          <center>
          <h2>Faça Sua Avaliação</h2>
          <h2>Escreva seu Comentário: </h2>
          
          <center>
            <textarea
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              placeholder="Digite o seu Feedback aqui..."
            />
          </center>

          <div>
            <h2>Selecione Uma Nota:</h2>
            <select value={number} onChange={(evento) => setNumber(evento.target.value)}>
              <option value="">Selecione uma nota</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <h4>A nota escolhida é {number}</h4>
          </div>

          <button onClick={Alerta}>Enviar</button>
          </center>
        </article>

      </section>

      <footer>
        <p>© 2025 William Jr. Todos os direitos reservados.<br  />
        Obrigado por visitar nosso site. Entre em contato conosco para mais informações ou parcerias.</p>
      </footer>
    </div>
  );
}

export default Contato