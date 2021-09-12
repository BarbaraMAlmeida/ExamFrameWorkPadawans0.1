import React from 'react'
import { Link } from 'react-router-dom'

//preciso conseguir renderizar a imagem aqui

import Astronaut from '../../Img/error_page.png'
import ball from '../../Img/ball.png'


function Error() {
    return(
        <div>
              <img src={ball} alt="ball" className="img_ball"/>
              <section className='background-error'>
                  <div className='astronaut'>
                    <img src={Astronaut} alt="stronaut" />
                  </div>

                  <div className='text-error'>
                    <div>
                      <h1>Oops!</h1>
                      <p>
                        Essa página não existe! Caso deseje voltar à 
                        aplicação basta clicar no botão abaixo
                      </p>
                      <Link to="/"><button>Voltar</button></Link>
                    </div>
                  </div>
              </section>
        </div>
    )
}

export default Error