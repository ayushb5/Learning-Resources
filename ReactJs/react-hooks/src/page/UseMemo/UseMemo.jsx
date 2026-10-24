import { useMemo, useState } from "react";

const ExpensiveComponent = () => {
    const sum = () => {
        let i = 0;
        for (i = 0; i <= 1000000000; i++) {
            i = i + 1;
        }
        return i;
    };

    const total = useMemo(() => sum(), []);

    // const total = sum(); //Runs on every render

    return <p>sum: {total}</p>
}

function UseMemo() {
    const [count, setCount] = useState(0);
    return (
        <div className='flex h-lvh justify-center items-center'>
            <div className='flex flex-col p-4 border'>
                <ExpensiveComponent />
                <button className='border bg-blue-400' onClick={() => setCount(count + 1)}>Re-render Parent</button>
                <span>Parent re-renders: {count}</span>
            </div>
        </div>
    )
}

export default UseMemo