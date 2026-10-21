
// Actually we are not passing event methods like onClick, its just props and props onClick is simple name we can give anything name to it which will work same on some change
function EventsInProps() {
    const handleClickFromParent = () => {
        alert("Welcome user")
    }
    return (
        <>
            <WelcomeButton onClick={handleClickFromParent} />
            {/* <WelcomeButton onButtonClick={handleClickFromParent}>Click me to welcome</WelcomeButton> */}
        </>
    )
}

export default EventsInProps

function WelcomeButton({ onClick }) {
    return (
        <>
            <button onClick={onClick}>Click me to Welcome</button>
        </>
    )
}