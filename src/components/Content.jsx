import React, {Fragment, useEffect, useState} from "react"
import logo from "../assets/img/pokeact1.png"
import axios from "axios"

const Content = () => {
    const url = "https://pokeapi.co/api/v2/pokemon/"
    const countPokemon = 400
    const [data, setData] = useState([])
    const [loading, isLoading] = useState(false)

    function capitalizeWord(word) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase()
    }

    useEffect(() => {
        const fetchData = async (id) => {
            isLoading(true)

            const getData = await axios(`${url}${id}`);
            const result = getData.data
            setData(data => [...data, result])
            
            isLoading(false)
        };

        for (let i = 1; i <= countPokemon; i++) {
            fetchData(i)
        }
    }, []);

    return(
        <Fragment>
            <div className="flex flex-col text-center w-full mb-20">
                <img src={logo} alt="Logo" className="w-24 h-24 mx-auto text-white bg-gray-300 rounded-full App-logo"/>
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Find Pokemon in Pokeact</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">A Pokemon list made with library React JS</p>
            </div>
            <div className="flex flex-wrap justify-center">
                {loading ? (<h1>Loading...</h1>) : (
                    <Fragment>
                        {data.map(item => (
                            <div className="xl:w-1/6 md:w-full sm:w-full p-4 m-2 bg-gray-300" id="list" key={item.id}>
                                <img className="h-40 rounded w-full object-cover object-center mb-6 bg-white" src={item.sprites.front_default} alt={item.name} />
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">#{item.id}</h3>
                                <h2 className="text-lg font-medium title-font mb-4 text-gray-700">{capitalizeWord(item.name)}</h2>
                            </div>
                        ))}
                    </Fragment>
                )}
            </div>
        </Fragment>
    )
}

export default Content