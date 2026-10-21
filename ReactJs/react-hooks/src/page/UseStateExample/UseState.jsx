import { useState } from "react"

function UseState() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(() => count + 1);
    }
    const decrement = () => {
        setCount(() => count - 1);
    }
    return (
        <div>
            <h2>Example of useState - Counter</h2>
            <div className="d-flex">
                <button className="bg-sky-600" onClick={increment}>+</button>
                <h3>{count}</h3>
                <button className="bg-sky-600" onClick={decrement}>-</button>
            </div>
        </div>
    )
}

export default UseState