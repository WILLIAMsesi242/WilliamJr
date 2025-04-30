import { useState, useEffect } from 'react'

import venom from '../assets/venom.png'
import yes from '../assets/simm.jfif'
import luffy from '../assets/luffy.png'


import '../components/Lindo.css'

function Sobre() {

  const [carrousel, setCarrousel] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setCarrousel(carrousel => carrousel + 1)
      if (carrousel >= 2) {
        setCarrousel(0)
      }
    }, 2000);
    return () => clearInterval(interval);
  })


  return (
    <div>
      
      <header>
        <h1>Sobre</h1>
      </header>

      <center>
        <div className='pictures'>
          {carrousel == 0 ? <img src={venom} alt="carrouselFront" className="carimc" /> : ""}
          {carrousel == 1 ? <img src={yes} alt="carrouselFront" className="carim" /> : ""}
          {carrousel == 2 ? <img src={luffy} alt="carrouselFront" className="carim" /> : ""}
        </div>
      </center>

<br  />

<center>
      <div className='legal'>  
        <h2>Veja este video abaixo💭: </h2>
        <iframe width="950" height="500" src="https://www.youtube.com/embed/iDpXALDzawg?si=IsZRgawtjOVrUhjJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
</center>

      <footer>
        <p>© 2025 William Jr. Todos os direitos reservados.<br />
          Obrigado por visitar nosso site. Entre em contato conosco para mais informações ou parcerias.</p>
      </footer>

    </div>
  )
}

export default Sobre