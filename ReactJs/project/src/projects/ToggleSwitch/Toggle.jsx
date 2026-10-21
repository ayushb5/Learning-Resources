import { useState } from "react";

function Toggle() {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <div className="h-screen flex justify-center items-center">
                <div className={`border flex items-center rounded-full shadow-md h-21 w-50 cursor-pointer ${toggle ? "bg-green-400" : ""}`} onClick={() => setToggle(prev => !prev)}>
                    <button className={`border h-18 w-18 m-1 p-2.5 rounded-full bg-gray-400 transform duration-300 select-none ${toggle ? "translate-x-29 bg-white" : ""}`}>
                        {toggle ? "ON" : "OFF"}
                    </button>
                </div>
            </div >
        </>
    )
}

export default Toggle