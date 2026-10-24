import { useMemo, useState } from 'react'
import { Count } from './Count';

function UseMemoWithObject() {
    const [count, setCount] = useState(0);

    const myData = useMemo(() => {
        return {
            name: "John Doe",
            age: 22
        }
    }, []);

    return (
        <div className='flex h-lvh justify-center items-center'>
            <div className='flex flex-col p-4 border'>
                <span className='text-center'>{count}</span>
                <button className='border bg-blue-400' onClick={() => setCount((prev) => prev + 1)}>Increment</button>
                <Count myData={myData} />
            </div>
        </div>
    )
}

export default UseMemoWithObject