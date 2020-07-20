import React, {Fragment, useEffect, useState} from "react"
// import Card from "./card/Card"
import Modal from "./modal/Modal"
import logo from "../logo.svg"
import axios from "axios"

const Content = () => {
    const url = "https://pokeapi.co/api/v2/pokemon/"
    const countPokemon = 400
    // eslint-disable-next-line no-unused-vars
    const [data, setData] = useState([])
    const [modal, isModalOpen] = useState(false)
    const [dataOne, setOneData] = useState({ data:[] })

    const getSpecific = async(id) => {
        const getData = await axios(`${url}${id}`);
        const result = getData.data
        return result
    }
    
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
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">A Pokemon list made with library React JS</p>
            </div>
            <div className="flex flex-wrap justify-center">
                {data.map(item => (
                    <div className="xl:w-1/6 md:w-full sm:w-full p-4 m-2 bg-gray-300" key={item.id}>
                        <img className="h-40 rounded w-full object-cover object-center mb-6 bg-white" src={item.sprites.front_default} alt={item.name} />
                        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">#{item.id}</h3>
                        <h2 className="text-lg font-medium title-font mb-4 text-gray-700">{item.name}</h2>
                        <button className="flex mx-auto mt-2 text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={() => {
                            isModalOpen(true);
                            setOneData(getSpecific(item.id))
                            }}>Detail</button>
                    </div>
                ))}
            </div>
            {/* {modal ? (
                <Modal />
                ) : null 
            } */}
        </Fragment>
    )
}

export default Content