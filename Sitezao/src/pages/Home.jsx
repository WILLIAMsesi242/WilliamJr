import {useState, useEffect} from 'react'

import zoro from '../assets/zoro.png'
import spider from '../assets/spider1.png'
import snoop from '../assets/snoop.png'

import '../components/Lindo.css'

function Home() {
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

    return(
      <div>
        <header>
            <h1>🏡 Bem Vindo ao Site</h1>
            </header>
            <center>
    <div className='pictures'>
      
          {carrousel == 0 ? <img src={zoro} alt="carrouselFront" className="carimc" /> : ""}
          {carrousel == 1 ? <img src={spider} alt="carrouselFront" className="carim" /> : ""}
          {carrousel == 2 ? <img src={snoop} alt="carrouselFront" className="carim" /> : ""}   
        
   </div>
   </center>
      <footer>
        <p>© 2025 William Jr. Todos os direitos reservados.<br  />
        Obrigado por visitar nosso site. Entre em contato conosco para mais informações ou parcerias.</p>
      </footer>
        
        </div>
)  
}

export default Home;