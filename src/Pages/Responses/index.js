import React from 'react'
import { useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

function Post() {
    const [response, setResponse] = useState([])

    useEffect(()=> {
        
        //chamada da API

        function LoadApi() {
            let url = 'https://api.thecatapi.com/v1/images/search'
            let key = '96396e94-6980-4e13-83eb-5dd1bc8ad194'
            

            //O fetch serve para consumo de api assim como o axios
            fetch('https://api.thecatapi.com/v1/images/search')
            .then((resultado)=> resultado.json())
            .then((json)=> {
                setResponse(json)
            })

        }

        LoadApi()

    }, [])


    return(
        <div>

            <div className='container'>

            <section className='title_section'>
                Post Details
            </section>
            

            <div className='datas_api'>
                {response.map((data)=> {
                    return(
                       <div key={data.id}>
                           <div className='response_post'>
                            <img src={data.url} alt="ImageCat" />

                            <div className='reactionsPost'>
                                <div>
                                    <i class="fas fa-heart"/>
                                    <i class="fas fa-comment"/>
                                </div>
                                <i class="fas fa-paper-plane"/>
                            </div>   

                            <div className="button_datas">
                                <Link to='/Posts'><button>Ver Posts</button></Link>
                            </div>
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