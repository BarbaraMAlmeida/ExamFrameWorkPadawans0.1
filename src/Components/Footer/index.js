import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer(props) {
    return(
        <div>
           <footer>
               <div className='footer-left'>
                   <img src={props.image} alt="logo"/>
               </div>

                <div className='footer-center'>
                    <h2>Links</h2>
                    <div className='line'></div>
                    <ul>
                       <Link to='/Posts'><li>Posts</li></Link>
                       <Link to='/Albuns'><li>Albuns</li></Link>
                       <Link to='/ToDos'><li>ToDos</li></Link>
                    </ul>
                </div>

                <div className='footer-right'>
                    <h2>Redes Sociais</h2>
                    <div className='line'></div>
                    <div className='icons'>
                        <i class="fab fa-facebook-square"></i>
                        <i class="fab fa-instagram-square"></i>
                        <i class="fab fa-linkedin"></i>
                    </div>
                </div>
           </footer>
        </div>
    )
}
