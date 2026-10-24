import { memo, useCallback, useState } from "react";

export const Button = memo(({ onClick, children }) => {
    console.log(`Rendering button:${children}`);

    return (
        <button className={`text-black mb-4 py-2 px-5 ${children === "Increment" ? "bg-green-400" : "bg-red-400"}`} onClick={onClick}>
            {children}
        </button>
    )
});

function UseCallback() {
    const [count, setCount] = useState(0);

    // const increment = () => {
    //     setCount((prev) => prev + 1);
    // }

    // const decrement = () => {
    //     setCount((prev) => prev - 1);
    // }

    // Using useCallback

    const increment = useCallback(() => {
        console.log("Inside Increment");
        setCount((prev) => prev + 1);
    }, []);

    const decrement = useCallback(() => {
        console.log("Inside Decrement");
        setCount((prev) => prev - 1);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="p-4 border">
                <h1 className="text-center my-3">Count: {count}</h1>
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
            </div>
        </div>
    )
}

export default UseCallback