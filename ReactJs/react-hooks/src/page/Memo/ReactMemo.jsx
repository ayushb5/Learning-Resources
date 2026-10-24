import { useState } from 'react'
import { Count } from './Count';

function ReactMemo() {
    const [count, setCount] = useState(0);
    return (
        <div className='flex h-lvh justify-center items-center'>
            <div className='flex flex-col p-4 border'>
                <span className='text-center'>{count}</span>
                <button className='border bg-blue-400' onClick={() => setCount((prev) => prev + 1)}>Increment</button>
                <Count />
            </div>
        </div>
    )
}

export default ReactMemo