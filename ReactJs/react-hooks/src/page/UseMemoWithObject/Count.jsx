import React, { useRef } from 'react'

export const Count = React.memo(({ myData }) => {
    const renderCount = useRef(0);
    return (
        <div className='flex gap-2'>
            <p>Nothing changed here but now rendered:</p>
            <span className='text-red-600'>{renderCount.current++} time(s)</span>
            <span>My name is {myData.name}</span>
        </div>
    )
})

// OR 
// export default React.memo(Count)