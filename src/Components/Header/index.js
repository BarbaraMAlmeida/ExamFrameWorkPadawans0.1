import React , {useEffect, useState,useCallback}  from 'react'
import {Link} from 'react-router-dom'


export default function Header(props) {
    const [controlMenuDown, setControlMenuDown] = useState(false)
    const [currentWidthScreen, setCurrentWidthScreen] = useState(0)

    const changeMenuDown = () =>  {
        setControlMenuDown(!controlMenuDown)
    }

    useEffect (() => {
        setCurrentWidthScreen(window.innerWidth)
    },[])

    useEffect (() => {
        window.addEventListener('resize', () => setCurrentWidthScreen(window.innerWidth))
    }, [])

    const isMenuAvailable = controlMenuDown && currentWidthScreen < 760


    return(
        <div>
           <header>
               <div className='header-left'>
                  <Link to="/"> <img src={props.image} alt="logo"/></Link>
               </div>

                <div className='header-right'>
                    <ul>
                       <Link to='/Posts'><li>Posts</li></Link>
                       <Link to='/Albuns'><li>Albuns</li></Link>
                       <Link to='/ToDos'><li>ToDos</li></Link>
                    </ul>
                </div>

                <div className="menuHamburguer" onClick={changeMenuDown} >
                <i className="fas fa-bars"/>
                </div>
           </header>

           <div className={`menu-down ${isMenuAvailable && 'open'}`}>
            <ul className="menu-visible">
                <Link to='/Posts'><li>Posts</li></Link>
                <Link to='/Albuns'><li>Albuns</li></Link>
                <Link to='/ToDos'><li>ToDos</li></Link>
            </ul>
        </div>
        </div>
    )
}
