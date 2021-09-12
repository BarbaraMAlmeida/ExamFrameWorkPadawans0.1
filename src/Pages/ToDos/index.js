import React from 'react'
import { useEffect, useState} from 'react'

function Post() {
    const [currentTodos, setCurrentTodos] = useState([])
    const [todos, setToDos] = useState([])
    useEffect(()=> {
        
        //chamada da API

        function LoadApi() {
            let url = 'https://jsonplaceholder.typicode.com/todos'
            

            //O fetch serve para consumo de api assim como o axios
            fetch(url)
            .then((resultado)=> resultado.json())
            .then((json)=> {
                setToDos(json)
                setCurrentTodos(json)
            })

        }

        LoadApi()

    }, [])

    const getIsDoneFilterData = () => {
        const novosDados = todos.filter(item => item.completed)
        setCurrentTodos(novosDados)
    }

    const getIsNotDoneFilterData = () => {
        const novosDados = todos.filter(item => !item.completed)
        setCurrentTodos(novosDados)
    }

    const resetData = () => {
        setCurrentTodos(todos)
    }


    return(
        <div>

            <div className='container'>

                <section className='title_section'>
                    Lista de Tarefas e Afazeres
                </section>

                <section className='filter'>
                    <span>Filtre por:</span>
                    <button onClick={resetData}>Todos</button>
                    <button onClick={getIsDoneFilterData}>Concluída</button>
                    <button onClick={getIsNotDoneFilterData}>Não Concluída</button>
                </section>

                <div className='datas_api'>
                    {currentTodos.map((data)=> {
                        return(
                            <div key={data.id} className='todos'>
                                <p>{data.id}.</p>
                                <h2>{data.title}</h2>
                                <div className="checked">
                                    {
                                    data.completed?  <i class="fas fa-check completed"></i>:
                                    <i class="fas fa-times uncompleted"></i>
                                    }
                                
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