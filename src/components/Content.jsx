import React, {Fragment, useEffect, useState} from "react"
import Card from "./card/Card"
import logo from "../logo.svg"
import axios from "axios"

const Content = () => {
    const url = "https://pokeapi.co/api/v2/pokemon/"
    const countPokemon = 400
    // eslint-disable-next-line no-unused-vars
    const [data, setData] = useState([])
    
    useEffect(() => {
        const fetchData = async (id) => {
            const getData = await axios(`${url}${id}`);
            const result = getData.data
            setData(data => [...data, result])
        };
        for (let i = 1; i <= countPokemon; i++) {
            fetchData(i)
        }
    }, []);

    return(
        <Fragment>
            <div className="flex flex-col text-center w-full mb-20">
                <img src={logo} alt="Logo" className="w-24 h-24 mx-auto text-white bg-indigo-500 rounded-full"/>
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Find Pokemon in Pokeact</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, error, alias labore incidunt quae odio temporibus dolor sunt modi placeat aliquam distinctio iusto inventore aspernatur eos quo minus non sit!</p>
            </div>
            <div className="flex flex-wrap justify-center">
                {data.map(item => (
                    <Card 
                        key={item.id}
                        image={item.sprites.front_default}
                        id={item.id}
                        name={item.name}
                    />
                ))}
            </div>
        </Fragment>
    )
}

export default Content