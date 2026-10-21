import { useId, useRef } from "react"

function UseId() {
    const id = useId();
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        console.log(username, password);
        usernameRef.current.value = "";
        passwordRef.current.value = "";
    }

    return (
        <form className="mx-10 my-4 flex flex-col items-center" onSubmit={handleSubmit}>
            <h1 className="text-2xl text-center font-semibold">Login</h1>
            <div className="flex flex-col gap-2 mb-2 w-100">
                <label htmlFor={id + "username"}>Username</label>
                <input type="text" className="border px-2 py-0.5" ref={usernameRef} id={id + "username"} />
            </div>
            <div className="flex flex-col gap-2 mb-2 w-100">
                <label htmlFor={id + "password"}>Password</label>
                <input type="password" className="border px-2 py-0.5" ref={passwordRef} id={id + "password"} />
            </div>
            <div className="text-center">
                <button className="btn border hover:bg-gray-300 active:scale-95">Login</button>
            </div>
        </form>
    )
}

export default UseId