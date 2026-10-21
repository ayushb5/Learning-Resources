

function EventPropagation() {
    const handleRootClick = () => {
        console.log("Root/GrandParent clicked");
    }

    const handleParentClick = (e) => {
        console.log("Parent clicked");
        // stop propagating from parent to bottom i.e stop before child use below method (for event capturing)
        // e.stopPropagation();
    }

    const handleChildClick = (e) => {
        console.log("Child clicked");
        // To stop default behaviour, i.e to stop to go from child to top stop it at child, here child will execute but stops because of this below method (for event bubbling)
        // e.stopPropagation();
    }
    return (
        <>
            <h3>Event Bubbling (Default behavior in JS)</h3>
            {/* Event Bubbling */}
            {/* Root / GrandParent */}
            <div onClick={handleRootClick}>
                {/* Parent */}
                <div onClick={handleParentClick}>
                    {/* Child */}
                    <button onClick={handleChildClick}>Child Click</button>
                </div>
            </div>
            <br />
            <h3>Event Capturing</h3>
            {/* Event Capturing */}
            {/* Root / GrandParent */}
            <div onClickCapture={handleRootClick}>
                {/* Parent */}
                <div onClickCapture={handleParentClick}>
                    {/* Child */}
                    <button onClickCapture={handleChildClick}>Child Click</button>
                </div>
            </div>
        </>
    )
}

export default EventPropagation
