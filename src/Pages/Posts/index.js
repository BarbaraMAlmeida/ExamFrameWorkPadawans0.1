import React, { useCallback } from 'react'
import { useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

function Post() {
    const [posts, setPosts] = useState([])
    const [valueCurrent, setValueCurrent] = useState([{}])
    useEffect(()=> {
        
        //chamada da API

        function LoadApi() {
            let url = 'https://jsonplaceholder.typicode.com/posts'
            

            //O fetch serve para consumo de api assim como o axios
            fetch(url)
            .then((resultado)=> resultado.json())
            .then((json)=> {
                setPosts(json)
                setValueCurrent(json)
            })

        }

        LoadApi()

    }, [])


    const getPostUser = (e) => {
      let value = e.target.value

       if(value != 0){
        const novosDados =  posts.filter(item => item.id == value)
        setValueCurrent(novosDados)
       }
       else{
        setValueCurrent(posts)
       }

    }

    

    return(
        <div>

            <div className='container'>

            <section className='title_section'>
                Visualize os Posts aqui
            </section>

            <section className='filter'>
                <span>Filtre por:</span>
                <input type="number" placeholder="Digite o Id do User" onChange={getPostUser} />
            </section>

            <div className='datas_api'>
                {valueCurrent.map((data)=> {
                    return(
                        <div key={data.id} className='post'>
                            <i class="fas fa-user-circle"></i>
                            <h2>{data.title}</h2>
                            <p>{data.body}</p>
                            <div className="button_datas">
                                <legend>User:{data.id}</legend>
                                <Link to='/Response'><button>Acessar</button></Link>
                            </div>
                        </div> 
                    )
                })}
            </div>
        </div>
        </div>
    )
}

export default Post