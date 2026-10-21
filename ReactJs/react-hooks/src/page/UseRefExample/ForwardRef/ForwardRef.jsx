import { useRef } from "react"
import BeforeReact19 from "./BeforeReact19";
import AfterReact19 from "./AfterReact19";

function ForwardRef() {
    const username = useRef(null);
    const password = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username.current.value, password.current.value)
        username.current.value = "";
        password.current.value = "";
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
            {/* Before React 19 we use forwardRef to pass ref to child */}
            {/* <BeforeReact19 label="username" ref={username} />
            <BeforeReact19 label="password" ref={password} /> */}

            {/* After React 19 we use simple props to pass ref to child */}
            <AfterReact19 label="username" ref={username} />
            <AfterReact19 label="password" ref={password} />
            <button className="btn border hover:bg-gray-400">Login</button>
        </form>
    )
}

export default ForwardRef