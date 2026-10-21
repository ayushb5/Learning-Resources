import { useRef, useState } from "react";
import SuccessPage from "./SuccessPage";

function UseRef() {
    const user = {
        email: "user1@gmail.com",
        password: "User@123"
    };
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // using useRef() - add ref={} inside input
    const email = useRef(null);
    const password = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Using simple js
        // const email = document.getElementById("email");
        // const password = document.getElementById("password");
        // console.log(email.value, password.value);

        // for useRef
        if (email.current.value === user.email && password.current.value === user.password) {
            setIsLoggedIn(true)
        } else {
            alert("Invalid email or password.")
            email.current.value = "";
            password.current.value = "";
        }
    };

    if (isLoggedIn) {
        return <SuccessPage />
    }

    return (
        <div className="flex flex-col justify-center items-center my-4">
            <div className="p-4 w-120 border border-gray-300 shadow-md">
                <h3 className="text-center">Login</h3>
                <form className="my-4 flex flex-col items-center gap-4" onSubmit={handleSubmit}>
                    <input type="email" id="email" ref={email} className="px-2 w-full py-1 border border-gray-600 focus:outline outline-blue-600 rounded-sm" placeholder="Enter your email" required />
                    <input type="password" id="password" ref={password} className="px-2 w-full py-1 border border-gray-600 focus:outline outline-blue-600 rounded-sm" placeholder="Enter your password" required />
                    <button type="submit" className="btn text-white bg-blue-500 hover:bg-blue-700 active:scale-95">Login</button>
                </form>
            </div>
        </div>
    )
}

export default UseRef