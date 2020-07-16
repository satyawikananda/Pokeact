import React, {Fragment} from "react"

const Card = (props) => {
    return (
        <Fragment>
            <div className="xl:w-1/6 md:w-1/2 p-4 m-2 bg-gray-300">
                <img className="h-40 rounded w-full object-cover object-center mb-6 bg-white" src={props.image} alt={props.name} />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">#{props.id}</h3>
                <h2 className="text-lg font-medium title-font mb-4 text-gray-700">{props.name}</h2>
            </div>
        </Fragment>
    )
}

export default Card