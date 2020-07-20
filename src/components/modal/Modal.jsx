import React from "react"


const Modal = (props) => {
    // const [modal, isModalOpen] = useState(false)
    return (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                            <h3 className="text-3xl font-semibold">
                                {props.name}
                            </h3>
                        </div>
                        <div className="relative p-6 flex-auto">
                            <img className="h-40 rounded w-full object-cover object-center mb-6 bg-white" src={props.image} alt={props.name} />
                        </div>
                        <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                                style={{ transition: "all .15s ease" }}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal