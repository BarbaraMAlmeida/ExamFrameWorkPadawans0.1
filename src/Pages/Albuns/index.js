import React from 'react'
import { useEffect, useState} from 'react'



function Post() {
    const [albuns, setAlbuns] = useState([])
    const [currentAlbuns, setCurrentAlbuns] = useState([])

    useEffect(()=> {
        
        //chamada da API

        function LoadApi() {
            let url = 'https://jsonplaceholder.typicode.com/albums'
            

            //O fetch serve para consumo de api assim como o axios
            fetch(url)
            .then((resultado)=> resultado.json())
            .then((json)=> {
                setAlbuns(json);
                setCurrentAlbuns(json)
            })

        }

        LoadApi()

    }, [])

    const getAlbunsUser = (e) => {
        let value = e.target.value
        
        if(value != 0){
            const novosDados =  albuns.filter(item => item.id == value)
            setCurrentAlbuns(novosDados)
        }
        else{
            setCurrentAlbuns(albuns)
        }
    }
  

    return(
        <div>

            <div className='container'>

            <section className='title_section'>
                Visualize o Álbum aqui
            </section>

            <section className='filter'>
                <span>Filtre por:</span>
                <input type="number" placeholder="Digite o Id do User" onChange={getAlbunsUser} />
            </section>

            <div className='datas_api'>
                {currentAlbuns.map((data)=> {
                    return(
                        <div key={data.userId} className='albuns'>
                            <p>User: {data.id}</p>
                            <h2>{data.title}</h2>
                        </div> 
                    )
                })}
            </div>
        </div>
        </div>
    )
}

export default Post