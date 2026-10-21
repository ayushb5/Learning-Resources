
function Events() {
    const handleButtonClick = (e) => {
        console.log(e.target.innerText);
        alert("Button Clicked");
    }

    const handleChange = (e) => {
        console.log(e.target.value);
        document.getElementById("name").innerText = e.target.value;
    }
    return (
        <>
            <input type="text" onChange={handleChange} />
            <h2>Enter text to see here your text:
                <span style={{ color: "blue" }} id="name"> </span>
            </h2>
            <button style={{ display: "block" }} onClick={handleButtonClick}>Click me</button>
        </>
    )
}

export default Events