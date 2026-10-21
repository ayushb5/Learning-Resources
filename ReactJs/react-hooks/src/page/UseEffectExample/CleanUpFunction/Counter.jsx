import { useEffect, useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Behaves differently because setInterval->setCount->prev thinks that the value of closure is different it just predicts not take actual previous value
        // setInterval(() => {
        //     setCount((prev) => prev + 1)
        // }, 1000);

        // to solve this we use cleanup function so it will clean and take proper prev value instead of just assuming
        const interval = setInterval(() => {
            setCount((prev) => prev + 1);
        }, 1000)

        return () => clearInterval(interval);


    })

    return (
        <div className="flex flex-col items-center justify-center mt-10 gap-4">
            <h1 className="text-3xl font-bold">Counter</h1>

            <p className="text-2xl">{count}</p>
        </div>
    );
}

export default Counter;